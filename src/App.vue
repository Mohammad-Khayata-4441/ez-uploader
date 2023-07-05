<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ErrorType } from "./types/ValidationError";
import hljs from 'highlight.js'

import urls from './components/examples/urls.vue'
import basic from './components/examples/basic.vue'
import multiple from './components/examples/multiple.vue'
import 'highlight.js/styles/vs2015.css';
onMounted(() => {
  hljs.highlightAll()
})





const files = ref([]);


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
      <basic></basic>
      <multiple></multiple>
      <urls></urls>
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
  @media (max-width:1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  align-items: center;
  gap: 24px;
}

 pre{
  width: 100%;
 }

.props {
  width: 100%;
  display: flex;
  flex-direction: column;

  table {

      border-collapse: collapse;
    thead {
      margin-bottom: 24px;

      th {
        padding: 15px 0;
        color: #41B883;
      }
    }

    td {
      border: 1px solid gray;
      
      padding: 10px;
      border-left: none;
      border-right: none;
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
  @media (min-width:1000px) {
    padding: 2rem;
  }
  max-width: 960px;

  .title {
    color: #41B883;
    font-size: 28px;
    font-weight: bold;
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
