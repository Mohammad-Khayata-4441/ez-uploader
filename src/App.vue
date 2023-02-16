<script setup lang="ts">
import { ref } from 'vue';
import FileUploader from './FileUploader.vue';
import './scss/file_uploader.scss';

const urls = ref(['https://images.unsplash.com/photo-1676497589228-059b15a9df6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'])
const url = ref('https://images.unsplash.com/photo-1676497589228-059b15a9df6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
const files = ref([])
</script>

<template>

  <div>
    <div class="form">
      <FileUploader :url="url">
      </FileUploader>


    </div>
  </div>
</template>


<style scoped>
  .form{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
</style>