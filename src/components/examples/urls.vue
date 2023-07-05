
<script lang="ts" setup>
import { ref } from 'vue';
import EzUploader from '../../lib/main'
const files = ref([]);
const deletedUrls = ref<string[]>([])
const urls = ref([
    'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
])

</script>
<template>
    <div>
        <h2>Server Attached Files Urls</h2>
        <p>in some cases (like in modify pages) we get the old images or files as urls from the serve
            so the component provide you a
        <pre> v-model:urls </pre> and
        <pre>v-model:deletedUrls</pre>
        </p>

        with this props , you can display and delete images that attached by the server
        <div class="example">

            <div class="form">

                <div class="form-control">

                    <p></p>
                    <label>Attached urls</label>
                    <EzUploader multiple v-model:url="urls" v-model:deletedUrls="deletedUrls" v-model="files" />
                    <pre>
    urls :
    {{ urls.map(s => s.split('.')[s.split('.').length - 2].substring(0,10) + '...' ) }}
    
    deletedUrls :
        
        {{ deletedUrls.map(s => s.split('.')[s.split('.').length - 2].substring(0,10) + '...' ) }}


        </pre>
                </div>



            </div>


            <pre>

                <code >
                    {{
                        `
<script setup lang="ts">

  import EzUploader from 'ez-uploader'
  import "ez-uploader/style"
  
  const deletedUrls = ref<string[]>([])

  const urls = ref([
  "org/wikipedia/commons/b/b4/....",
  "org/wikipedia/commons/b/b4/....",
  "org/wikipedia/commons/b/b4/...."
])
  const files = ref([])
  
  </script>
  
<template>
    
    <EzUploader multiple v-model:url="urls"
     v-model:deletedUrls="deletedUrls" v-model="files" />
  
</template>
    `
                    }}
</code>
</pre>


        </div>
    </div>
</template>