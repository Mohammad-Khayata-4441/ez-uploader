<script setup lang="ts">
import { ref } from 'vue';
import FileUploader from './ElkoodFileUploader.vue';
import './scss/elkood-file-uploader.scss';

const urls = ref(['https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg'])
const url = ref('https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg')
const files = ref([])

</script>

<template>
  <div>
    <div class="form">

      <FileUploader multiple v-model:deleted-urls="files" v-model:url="url">
      </FileUploader>


    </div>
  </div>
</template>


<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>