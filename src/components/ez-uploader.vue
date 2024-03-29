<script setup lang="ts">
import { useFile, type FileType } from "../composables/useFile";
import { hasOwn, isArray } from "@vue/shared";
import Compressor from "compressorjs";
import { v4 as uuid } from "uuid";
import { watch, computed, ref, useAttrs } from "vue";
import type { ErrorType } from '../types/ValidationError'
import Times from "./icons/Times.vue";
import Upload from "./icons/Upload.vue";
import Preview from './icons/Preview.vue'
interface fileDto {
  file: File | undefined;
  url: string;
  id: string;
  type: FileType;
}

// Props
type propsType = {
  url?: string | string[];
  base64?: boolean;
  quality?: number;
  contain?: boolean;
  cover?: boolean;
  accept?: "audio/*" | "video/*" | "image/*" | string;
  deleteBtnClass?: string;
  previwerContainerClass?: string;
  previwerItemClass?: string;
  previewImageClass?: string;
  file?: File | null;
  maxSize?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxCount?: number;
  deleteUrlBtn?: boolean;
  downloadBtn?: boolean;
  openBtn?: boolean;
  modelValue?: File | File[] | null;
  deletedUrls?: string[];
}

const props = withDefaults(defineProps<propsType>(), {
  base64: false,
  contain: true,
  cover: false,
  deleteBtnClass: "",
  deletedUrls: () => [],
  file: null,
  accept: 'image/*',
  quality: 1,
  deleteUrlBtn: true,
  downloadBtn: false,
  openBtn: true,
});

// Emits
const emit = defineEmits<{
  (e: "update:modelValue", files: File | File[] | null): void;
  (e: "update:url", url?: string | string[]): void;
  (e: "update:deletedUrls", urls: string[]): void;
  (e: "validationError", error: ErrorType | null): void;
  (e: "base64Generated", b64: string[] | string | null): void;
}>();


// Bindings
const { getFileExt, getFileType, toBase64 } = useFile();
const attrs = useAttrs();
// State
const fileInput = ref<HTMLInputElement | null>(null);
const id = Date.now() * (Math.random() * 10000);
const localFiles = ref<fileDto[]>([]);
const localUrls = ref<string[]>([]);
const deletedUrls = ref<string[]>([]);
// Getters
const isMulti = computed(() => hasOwn(attrs, "multiple"));
const modelValue = computed(() => props.modelValue);
// Functions
function showUploadFileWindow() {
  if (fileInput.value) fileInput.value.click();
}

function compressFile(file: File) {
  return new Promise<File>((resolve, reject) => {
    // eslint-disable-next-line no-new
    new Compressor(file, {
      quality: props.quality,
      success(result) {
        resolve(
          new File([result], file.name, {
            lastModified: new Date().getTime(),
            type: result.type,
          })
        );
      },
      error(err) {
        reject(err);
      },
    });
  });
}

function reset() {
  localFiles.value = [];
  localUrls.value = [];
}

function resetValidation() {
  emit("validationError", null);
}
const toMb = (fileSize: number) => fileSize / 1000000;
async function validateFile(file: File) {
  if (props.maxSize !== null || props.maxSize !== undefined && (props.maxSize >= toMb(file.size))) {
    resetValidation();
    return Promise.resolve();
  } else {
    return Promise.reject({
      fileName: file.name,
      ErrorType: "maxSizeError",
      message: `The file (${file.name}) size is larger than the allowed size  (${props.maxSize} mb)`,
    });
  }
}
function deleteFile(e: any, fId: string) {
  e.stopImmediatePropagation();

  localFiles.value = localFiles.value.filter((f) => {
    if (f.id === fId) URL.revokeObjectURL(f.url);

    return f.id !== fId;
  });
  uploadEvent();
}
async function setFiles(filesList: FileList) {
  if (props.maxCount && filesList.length > props.maxCount) {
    emit("validationError", {
      errorType: "maxCount",
      message: `You Can't Upload More Than (${props.maxCount}) files`,
    });
    return;
  }
  // for (let file of filesList) {
  const files = [...filesList];

  const proms = files.map((file) => validateFile(file).then(async () => {

    const fileType = getFileType(getFileExt(file.name));
    if (fileType === "image") {
      try {
        file = await compressFile(file);
      } catch (er) {
        console.error(er);
      }
    }

    if (!isMulti.value) {
      localFiles.value = [];
      localUrls.value = [];
    }

    localFiles.value.push({
      file,
      id: uuid(),
      type: fileType,
      url: URL.createObjectURL(file),
    });
    return file
  }).catch((error) => {
    console.log('error occured', error)
    emit("validationError", error);
  })


  )

  await Promise.all(proms);
  uploadEvent();



}

async function uploadEvent() {
  if (isMulti.value) {
    emit("update:modelValue", localFiles.value.map(({ file }) => file as File)
    );

    if (props.base64) {
      console.log('base 64 check')

      Promise.all(localFiles.value.map(async (f) => {
        const base64 = await toBase64(f.file as any);
        return base64
      })).then((bases) => {


        emit('base64Generated', bases);

      }).catch((er) => {
        console.log(er)
      })

    }

  }
  else {
    emit("update:modelValue", localFiles.value.length ? localFiles.value[0].file as File : null
    );
    if (props.base64) {
      let b64 = localFiles.value.length ? await toBase64(localFiles.value[0]?.file as any) : null
      emit('base64Generated', b64)
    }
  }
}
function clickHandler(e: any) {
  const filesList: FileList = e.target.files;

  setFiles(filesList);
}
function dropHandler(ev: any) {
  ev.preventDefault();

  const tempFiles = ev.dataTransfer.files;

  setFiles(tempFiles);
}
function dragOverHandler(ev: any) {
  ev.preventDefault();
}
function deleteUrl(event: Event, url: string, i?: number) {
  event.stopImmediatePropagation()
  deletedUrls.value.push(url);
  if (i !== undefined) {
    localUrls.value = localUrls.value.filter((u, index) => index !== i);
  }
  else {
    localUrls.value = localUrls.value.filter((u) => u !== url);
  }
  emit("update:deletedUrls", deletedUrls.value);
  emit('update:url', localUrls.value)
}
function initialize() {
  if (props.url) {
    if (typeof props.url === "string") localUrls.value.push(props.url);
    else if (Array.isArray(props.url))
      localUrls.value = [...localUrls.value, ...props.url];
  }
}
function getUrl(url: string) {
  return new URL(url, import.meta.url).href;
}

watch(
  modelValue,
  (nv) => {
    if (nv === null || (isArray(nv) && nv.length === 0)) reset();
  },
  { deep: true }
);

defineExpose({
  reset,
  resetValidation,
});

initialize();
</script>

<template>
  <div class="ez-uploader">
    <div class="ez-uploader__container" @click="showUploadFileWindow" @drop="dropHandler" @dragover="dragOverHandler">
      <div class="ez-uploader__placeholder" v-show="isMulti || (!isMulti && localFiles.length === 0)">
        <slot>
          <Upload class="ez-uploader__icon ez-uploader__placeholder__icon" width="45" height="45"></Upload>
          <span class="ez-uploader__placeholder__text"> Drag and Drop or browse files </span>
        </slot>


      </div>


      <div v-if="localFiles.length || url?.length" class="ez-uploader__preview"
        :class="[{ 'ez-uploader__preview--multi': isMulti }, previwerContainerClass]">
        <div v-for="(file, i) in localFiles" :key="file.id" class="ez-uploader__preview__preview-item"
          :class="previwerItemClass">
          <img class="ez-uploader__preview__preview-item__img" :src="file.type === 'image'
            ? file.url
            : `/icons/${file.type}.png`
            " :class="previewImageClass" />


          <div class="ez-uploader__preview__preview-item__overlay">
            <div v-if="file.file" class="ez-uploader__preview__preview-item__overlay__text">
              <slot name="info-overlay">
                <span class="ez-uploader__preview__preview-item__overlay__text__name">{{ file.file.name }}</span>
                <span>Type : {{ file.type }}</span>
                <span>Size : {{ (file.file.size / 1000000).toFixed(2) }}mb</span>
              </slot>
            </div>
            <div class="ez-uploader__preview-item__overlay__actions">
              <button :id="`delete-btn-${i}`" :class="deleteBtnClass" class="ez-uploader__action-btn"
                @click="deleteFile($event, file.id)">
                <Times src="@/assets/delete-file.svg?url" />
              </button>

              <a v-if="openBtn" target="_blank" :href="file.url" :id="`delete-btn-${i}`" :class="deleteBtnClass"
                class="ez-uploader__action-btn" @click="$event.stopImmediatePropagation()">
                <Preview class="ez-uploader__icon"></Preview>
              </a>
            </div>
          </div>



        </div>
        <div v-for="(url, i) in localUrls" :key="`url-${i}`" class="ez-uploader__preview__preview-item"
          :class="previwerItemClass">
          <img class="ez-uploader__preview__preview-item__img" :src="getFileType(getFileExt(url)) === 'image'
            ? url
            : `/icons/${getFileType(getFileExt(url))}.png`
            " :class="previewImageClass" />


          <div class="ez-uploader__preview__preview-item__overlay">
            <div class="ez-uploader__preview__preview-item__overlay__text">
              <slot name="info-overlay">
                <span class="ez-uploader__preview__preview-item__overlay__text__name">{{ url }}</span>
                <span>Type : {{ getFileType(getFileExt(url)) }}</span>
              </slot>
            </div>
            <div class="ez-uploader__preview-item__overlay__actions">
              <button :id="`delete-btn-${i}`" :class="deleteBtnClass" class="ez-uploader__action-btn"
                @click="deleteUrl($event, url, i)">
                <Times src="@/assets/delete-file.svg?url" />
              </button>

              <a v-if="openBtn" target="_blank" :href="url" :id="`delete-btn-${i}`" :class="deleteBtnClass"
                class="ez-uploader__action-btn" @click="$event.stopImmediatePropagation()">
                <Preview class="ez-uploader__icon"></Preview>
              </a>
            </div>
          </div>



        </div>
      </div>







    </div>



    <input :accept="accept" class="ez-uploader__input" :id="`file-uploader-${id}`" ref="fileInput" v-bind:="$attrs"
      type="file" hidden @change="clickHandler" />
  </div>
</template>
