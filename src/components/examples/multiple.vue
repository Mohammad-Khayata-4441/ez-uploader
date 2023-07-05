
<script lang="ts" setup>
import { ref } from 'vue';
import EzUploader from '../ez-uploader.vue'
const files = ref([]);
</script>
<template>
    <div class="example">

        <div class="form">

            <div class="form-control">
                <label>Multi Files </label>
                <EzUploader base64  @base64-generated="console.log($event)" multiple v-model="files" />
            </div>



        </div>


        <pre>

<code >
{{
    `
<script setup lang="ts">

  import EzUploader from 'ez-uploader'
  import "ez-uploader/style"


  const files = ref([])

</script>

<template>
  
    <EzUploader  v-model="files"></EzUploader>

</template>
  `
}}
</code>
</pre>

    </div>
</template>