<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "./components/ez-uploader.vue";
import { ErrorType } from "./types/ValidationError";
const urls = ref([
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
])
const files = ref([]);
const error = ref<null | string>('');
const onValidationError = (e: ErrorType | null) => {
  error.value = e?.message ?? null
}
</script>

<template>
  <div class="docs-container">
    <nav>
      <a href="">github</a>
      <a href="">npm</a>
    </nav>
    <h1 class="title">Vue Ez Uploader</h1>
    <div>

      <code>
          <p>

            {{ `
          <script lang="ts" setup>
          ` }}
          </p>
          <p>

            {{ `
    import EzUploader from 'ez-uploader' 
          ` }}
          </p>
          <p>

            {{ `
    const file = ref(null);
            ` }}
          </p>

        </code>
    </div>
    <code>
          {{ `
          <template>
            <EzUploader v-model="file"/> 
          </template>
            ` }}
        </code>
    <div class="form">

      <div>
   
        <label>Multiple Files</label>
        <FileUploader class="file-uploader" v-model="files" multiple @validation-error="onValidationError" />
      </div>
      

      <div>

        <p style="font-size:small; font-family: sans-serif; color: red;" v-if="error">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
@use './scss/base/variables';
@forward './scss/ez-uploader.scss';

.docs-container {
  nav{
    display: flex;
    gap: 20px;
    a{
      text-decoration: none;
      text-transform: capitalize;
      color: white;
    }
  }
  .file-uploader{
    margin-top: 10px;
  }

  color: white;
  margin: auto;
  padding: 2rem;
  max-width: 960px;
  .title {
    color: #41B883;
    text-align: center;
  }

  code {
    background-color: #181818;
    color: rgb(255, 255, 255);
    display: block;
    border-radius: 5px;
    border: 1px solid white;
    margin: 2rem 0;
    padding: 0.8rem;
  }
}
</style>
