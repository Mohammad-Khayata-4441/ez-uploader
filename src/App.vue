<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ErrorType } from "./types/ValidationError";
import hljs from 'highlight.js'
import EzUploader from './lib/main';
import 'highlight.js/styles/vs2015.css';
onMounted(() => {
  hljs.highlightAll()
})



const urls = ref([
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
])


const files = ref([]);
const file = ref(null)
const props = {
  base64: { desc: 'Provide Base 64 for output', default: "false", type: "boolean" },
  contain: { desc: 'Contain Preview Images', default: "true", type: "boolean" },
  cover: { desc: 'Cover Preview Images', default: "false", type: "boolean" },
  deleteBtnClass: { desc: 'class for delete btn', default: "", type: "string" },
  // 'v-model:deletedUrls': () => [],
  // file: null,
  accept: { desc: 'Set File Accept For the HTML File input', default: "image/*", type: "string (HTML Accept attribute)" },
  quality: { desc: 'Compress the quality of the uploaded image', default: "1", type: "number (0.1 to 1)" },
  // deleteUrlBtn: { desc: 'Display Delete ', default: "true", type: "string (HTML Accept attribute)" },
  // downloadBtn: { desc: 'Set File Accept For the HTML File input', default: "true", type: "string (HTML Accept attribute)" },
  // openBtn: true,
}



const error = ref<null | string>('');
const onValidationError = (e: ErrorType | null) => {
  error.value = e?.message ?? null
}
</script>

<template>
  <div class="docs-container">
    <nav>
      <a href="https://github.com/Mohammad-Khayata-4441/ez-uploader/tree/v0.4">github</a>
      <a href="">npm</a>
    </nav>

    <div class="title">Vue Ez Uploader</div>

    <div class="install">
      <h2>install</h2>
      <code>
                          npm install ez-uploader
                        </code>
      <code>
                          yarn add ez-uploader
                        </code>
    </div>

    <div class="usage">

      <h2>Examples</h2>
      <div class="example">

        <div class="form">

          <div class="form-control">
            <label>Single File (Default)</label>
            <EzUploader v-model="file" />
          </div>

          <div>
            <p style="font-size:small; font-family: sans-serif; color: red;" v-if="error">
              {{ error }}
            </p>
          </div>

        </div>


        <pre>

      <code >
        {{
          `
        <script setup lang="ts">
        
          import EzUploader from 'ez-uploader'

          const file = ref(null)

        </script>

        <template>
          
            <EzUploader v-model="file"></EzUploader>

        </template>
          `
        }}
      </code>
       </pre>

      </div>
      <div class="example">

        <div class="form">

          <div class="form-control">
            <label>Multi Files </label>
            <EzUploader multiple v-model="files" />
          </div>

          <div>
            <p style="font-size:small; font-family: sans-serif; color: red;" v-if="error">
              {{ error }}
            </p>
          </div>

        </div>


        <pre>

      <code >
        {{
          `
        <script setup lang="ts">
        
          import EzUploader from 'ez-uploader'

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
      <div class="example">

        <div class="form">

          <div class="form-control">
            <label>Accept (pdf , docs) </label>
            <EzUploader accept=".pdf,.docs" multiple v-model="files" />
          </div>

          <div>
            <p style="font-size:small; font-family: sans-serif; color: red;" v-if="error">
              {{ error }}
            </p>
          </div>

        </div>


        <pre>

      <code >
        {{
          `
        <script setup lang="ts">
        
          import EzUploader from 'ez-uploader'

          const files = ref([])

        </script>

        <template>
          
            <EzUploader  accept=".pdf,.docs" 
            v-model="files">
            </EzUploader>

        </template>
          `
        }}
      </code>
       </pre>

      </div>
    </div>

    <div class="props">

      <h2>
        Props
      </h2>

      <table>
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Desc</th>
            <th align="left">Default</th>
            <th align="left">Type</th>
          </tr>
        </thead>

        <tr v-for="(prop, key) in props">
          <td>{{ key }}</td>
          <td>{{ prop.desc }}</td>
          <td>{{ prop.default }}</td>
          <td>{{ prop.type }}</td>
        </tr>


      </table>

    </div>




  </div>
</template>

<style  lang="scss">
@use './scss/base/variables';
@forward './scss/ez-uploader.scss';

* {
  box-sizing: border-box;
}

.usage {
  margin-top: 50px;
}

.example {
  display: grid;
  grid-template-columns: 400px auto;
  align-items: center;
  gap: 24px;
}

pre {
  height: max-content;
  width: max-content;
}

.props {
  width: 100%;
  display: flex;
  flex-direction: column;

  table {

    thead {
      margin-bottom: 24px;

      th {
        padding: 15px 0;
        color: #41B883;
      }
    }

    td {
      padding: 10px 0;
    }
  }
}

.docs-container {
  nav {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: white;
    }
  }

  .form-control {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 10px;
  }

  color: white;
  margin: auto;
  padding: 2rem;
  max-width: 960px;

  .title {
    color: #41B883;
    font-size: 28px;
    text-align: center;
  }

  code {
    background-color: #181818;
    font-size: 15px;
    color: #e9e9e9;
    margin: 5px 0;
    display: block;
    border-radius: 5px;
    border: 1px solid rgb(75, 75, 75);
    padding: 1rem;
  }
}
</style>
