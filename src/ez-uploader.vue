<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { useFile, type FileType } from './composables/useFile'
import { hasOwn, isArray } from '@vue/shared'
import Compressor from 'compressorjs'
import { v4 as uuid } from 'uuid'
import { watch, computed, ref, useAttrs, withDefaults } from 'vue'
import Upload from './icons/Upload.vue'
import DeleteFile from './icons/DeleteFile.vue'
import Expand from './icons/Expand.vue'

interface fileDto {
  file: File | undefined
  url: string
  id: string
  type: FileType,
}

// Props 

type propsType = {
  url?: string | string[]
  base64?: boolean,
  quality?: number,
  contain?: boolean,
  cover?: boolean,
  deleteBtnClass?: string,
  previwerContainerClass?: string,
  previwerItemClass?: string,
  previewImageClass?: string,
  file?: File | null
  maxSize?: number,
  maxWidth?: number,

  deleteUrlBtn?: boolean,
  downloadBtn?: boolean,
  openBtn?: boolean,

  modelValue?: File | File[] | null,
  maxHeight?: number,
  deletedUrls?: string[],
}
const props = withDefaults(defineProps<propsType>(), {
  base64: false,
  contain: true,
  cover: false,
  deleteBtnClass: '',
  deletedUrls: () => [],
  file: null,
  quality: 0.8,
  deleteUrlBtn: true,
  downloadBtn: false,
  openBtn: true
})


//Emits
const emit = defineEmits(['update:modelValue', 'update:url', 'update:deletedUrls'])
// Bindings 
const { getFileExt, getFileType, downloadFile } = useFile()
const attrs = useAttrs()
// State 
const fileInput = ref<HTMLInputElement | null>(null)
const id = Date.now() * (Math.random() * 10000)
const localFiles = ref<fileDto[]>([])
const localUrls = ref<string[]>([])
const deletedUrls = ref<string[]>([])
// Getters 
const isMulti = computed(() => hasOwn(attrs, 'multiple'))
const modelValue = computed(() => props.modelValue);
// Functions 
function showUploadFileWindow() {
  if (fileInput.value)
    fileInput.value.click()
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
          }),
        )
      },
      error(err) {
        reject(err)
      },
    })
  })
}
function reset() {
  localFiles.value = [];
  localUrls.value = [];
}
function deleteFile(e: any, fId: string) {
  e.stopImmediatePropagation()

  localFiles.value = localFiles.value.filter(f => {
    if (f.id === fId)
      URL.revokeObjectURL(f.url)

    return f.id !== fId
  })
  uploadEvent()
}
async function setFiles(filesList: FileList) {

  for (let file of filesList) {
    const fileType = getFileType(getFileExt(file.name))
    if (fileType === 'image') {
      try {
        file = await compressFile(file)
      }
      catch (er) {
        console.error(er);
      }
    }

    if (!isMulti.value) {
      localFiles.value = []
      localUrls.value = []
    }


    localFiles.value.push({
      file,
      id: uuid(),
      type: fileType,
      url: URL.createObjectURL(file)
    })



  }
  uploadEvent()
}
function uploadEvent() {
  if (isMulti.value) {
    emit('update:modelValue', localFiles.value.map(({ file }) => file))
    emit('update:url', localFiles.value.map(({ url }) => url))
  }
  else {
    emit('update:modelValue', localFiles.value.length ? localFiles.value[0].file : null)
    emit('update:url', localFiles.value.length ? localFiles.value[0].url : '')
  }
}
function clickHandler(e: any) {
  const filesList: FileList = e.target.files

  setFiles(filesList)
}
function dropHandler(ev: any) {
  ev.preventDefault()

  const tempFiles = ev.dataTransfer.files

  setFiles(tempFiles)
}
function dragOverHandler(ev: any) {
  ev.preventDefault()
}
function deleteUrl(e: any, url: string) {
  e.stopImmediatePropagation()
  deletedUrls.value.push(url);
  localUrls.value = localUrls.value.filter(u => u !== url)
  emit('update:deletedUrls', deletedUrls.value)
}
function initialize() {
  if (props.url) {
    console.log('url', props.url)
    if (typeof props.url === 'string')
      localUrls.value.push(props.url)
    else if (Array.isArray(props.url))
      localUrls.value = [...localUrls.value, ...props.url]
  }
}
function getUrl(url: string) {

  return new URL(url, import.meta.url).href
}

watch(modelValue,
  nv => {
    console.log('model Value Change', nv);

    if (nv === null || (isArray(nv) && nv.length === 0))
      reset();
  },
  { deep: true },
);

defineExpose({
  reset,
});

initialize()
</script>

<template>
  <div class="ez-uploader">
    <button type="button" class="ez-uploader-btn" @click="showUploadFileWindow" @drop="dropHandler"
      @dragover="dragOverHandler">
      <slot>
        <span class="placeholder"> Click Or Drop File Here </span>
        <!-- <img src="@/assets/upload-1.svg?url" height="45" alt=""> -->
        <Upload class="upload-icon" height="45"></Upload>
      </slot>


      <div class="ez-uploader-preview" :class="[{ multi: isMulti }, previwerContainerClass]">

        <div v-for="(src, i) in localUrls" :key="i" class="ez-uploader-preview-item" :class="previwerItemClass">

          <img :src="src" :class="previewImageClass" class="preview-img">

          <div class="preview-item-overlay">

            <div class="action-btns">

              <button :id="`delete-btn-${i}`" class="action-btn" :class="deleteBtnClass" @click="deleteUrl($event, src)">
                <slot name="delete-btn">
                  <DeleteFile height="30" />

                </slot>

              </button>
              <button v-if="downloadBtn" :id="`delete-btn-${i}`" :class="deleteBtnClass" class="action-btn"
                @click="$event.stopImmediatePropagation(); downloadFile(src)">
                <slot name="delete-btn">
                  <img height="30" src="@/assets/download.svg?url" />
                </slot>
              </button>


              <a v-if="openBtn" target="_blank" :href="src" :id="`delete-btn-${i}`"
                @click="$event.stopImmediatePropagation()" :class="deleteBtnClass" class="action-btn">
                <Expand height="20" />
              </a>


            </div>


          </div>
        </div>

        <div v-for="(file, i) in localFiles" :key="file.id" class="ez-uploader-preview-item" :class="previwerItemClass">
          <img class="preview-img" :src="file.type === 'image' ? file.url : getUrl(`./assets/icons/${file.type}.png`)"
            :class="previewImageClass">
          <div class="preview-item-overlay">
            <div v-if="file.file" class="info">
              <slot name="info-overlay">
                <h6 style="font-weight: bold;"> {{ file.file.name }}</h6>
                <span>Type : {{ file.type }}</span>
                <span>Size : {{ (file.file.size / 1000000).toFixed(2)
                }}mb</span>

              </slot>
            </div>
            <div class="action-btns">

              <button :id="`delete-btn-${i}`" :class="deleteBtnClass" class="action-btn"
                @click="deleteFile($event, file.id)">
                <DeleteFile height="30" src="@/assets/delete-file.svg?url" />
              </button>

              <a v-if="openBtn" target="_blank" :href="file.url" :id="`delete-btn-${i}`" :class="deleteBtnClass"
                class="action-btn" @click="$event.stopImmediatePropagation()">
                <Expand height="20" src="@/assets/expand.svg?url" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </button>

    <input :id="`file-uploader-${id}`" ref="fileInput" v-bind:="$attrs" type="file" hidden @change="clickHandler">

  </div>
</template>

