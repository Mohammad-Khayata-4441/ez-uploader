<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ErrorType } from "./types/ValidationError";
import hljs from 'highlight.js'

import urls from './components/examples/urls.vue'
import basic from './components/examples/basic.vue'
import multiple from './components/examples/multiple.vue'
import './scss/ez-uploader.scss'
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
  maxSize: { desc: 'max file size per mb', default: "", type: "number" },
  maxCount: { desc: 'max count of files in multiple', default: "", type: "number" },
  'url': { desc: "in modify pages ... you can preview the old image by providing its url as prop , and you can delete some if they are multipe using v-mode:deleted-urls ", default: "[ ]", type: "string" },
  'v-model:deleted-urls': { desc: "When You use v-model:url  , you can access the deleted images (urls)", default: "", type: "string[]" },
  accept: { desc: 'Set File Accept For the HTML File input', default: "image/*", type: "string (HTML Accept attribute)" },
  quality: { desc: 'Compress the quality of the uploaded image', default: "1", type: "number (0.1 to 1)" },
  downloadBtn: { desc: 'usefull when you use image url ... it helps user to download the old image', default: "false", type: "boolean" },
  deleteUrlBtn: { desc: 'hide or show delete btn for urls ', default: "true", type: "boolean" },
  openBtn: { desc: 'hide or show preview button for urls ', default: "true", type: "boolean" },
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
    <p>Ez File Input Component For Vue.js (v3)</p>

    <ul>
      <li>✅ Built using TypeScritp 💙</li>
      <li>✅ 2 way binding support</li>
      <li>✅ Drag and Drop Support</li>
      <li>✅ File Compress Support Using compressorjs </li>
      <li>✅ Base 64 Support </li>
      <li>✅ Various File Extentions Preview Icons </li>
      
      <!-- <li>✅ Fully Customizable Styling Using Sass Variables ! </li> -->
    </ul>
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
      <!-- <SassVars></SassVars> -->
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


    <!-- <div class="sass-vars">
      Sass Variables
      <pre>

        <code>

        </code>
      </pre>
      
      <ul>
        <li>$ez-uploader-placeholder-font-size</li>
        <li>$ez-uploader-container-rounded</li>
        <li>$ez-uploader-container-min-height</li>
        <li>$ez-uploader-preview-max-height</li>
        <li>$ez-uploader-hover-transition</li>
        <li>$ez-uploader-preview-item-img-height</li>
        <li>$ez-uploader-border-color</li>
        <li>$ez-uploader-border-hover-color</li>
        <li>$ez-uploader-preview-item-overlay-bg</li>
        <li>$ez-uploader-action-btn-hover-bg</li>
        <li>$ez-uploader-preview-max-width</li>
      </ul>
    </div> -->




  </div>
</template>

<style  lang="scss">

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

pre {
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


  ul {
    list-style: none;

    li {
      font-size: 18px;
      margin: 20px 0;
    }
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
