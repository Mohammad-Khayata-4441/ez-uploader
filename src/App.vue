<script setup lang="ts">
import { ref } from "vue";
import FileUploader from "./ez-uploader.vue";
import "./scss/ez-uploader.scss";

const urls = ref([
  "https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg",
]);
const url = ref(
  "https://www.planetsport.com/image-library/square/1200/a/argentinas-lionel-messi-poses-with-the-fifa-world-cup-trophy.jpg"
);
const files = ref([]);
const file = ref();
const error = ref('');
const showError = (e)=>{
  if(e){

    console.log('error' , e)
    error.value = e.message;
  }
  else error.value = ''
}
</script>

<template>
  <div>
    <div class="form">
      <FileUploader  :maxCount="3" :maxSize="1" @validationError="showError" multiple v-model="files">
      </FileUploader>
      <div>

        <p style="font-size:small; font-family: sans-serif; color: red;" v-if="error">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  max-width: 800px;
}
</style>
