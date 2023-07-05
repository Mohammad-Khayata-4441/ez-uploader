<script lang="ts" setup>
import { ref } from 'vue';
import EzUploader from '../ez-uploader.vue'
const file = ref(null);
</script>

<template>
    <div class="example">

        <div class="form">

            <div class="form-control">
                <label>Sass Variables </label>
                <EzUploader :base64="true" @base64Generated="console.log($event)" v-model="file" />
            </div>

        </div>


        <pre>

<code >
                {{
                    `
<script setup lang="ts">

import EzUploader from 'ez-uploader'
import "ez-uploader/style"

const file = ref(null)

</script>

<template>

    <EzUploader v-model="file"></EzUploader>

</template>
`}}
            </code>
        </pre>

    </div>
</template>

<style lang="scss">
// @use '../../scss/base/variables';
// @forward '../../scss/ez-uploader.scss';

$ez-uploader-border-color : green;
</style>