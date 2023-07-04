
<script lang="ts" setup>
import { ref } from 'vue';
import EzUploader from '../../lib/main'
const files = ref([]);
</script>
<template>
    <div class="example">

        <div class="form">

            <div class="form-control">
                <label>Multi Files </label>
                <EzUploader multiple v-model="files" />
            </div>



        </div>


        <pre>

<code >
{{
    `
<script setup lang="ts">

  import EzUploader from 'ez-uploader'
  import "ez-uploader/styles"


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