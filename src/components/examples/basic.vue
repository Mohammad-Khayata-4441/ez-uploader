<script lang="ts" setup>
import { ref } from 'vue';
import EzUploader from '../../lib/main'
const file = ref(null);
</script>

<template>
    <div class="example">

        <div class="form">

            <div class="form-control">
                <label>Single File (Default)</label>
                <EzUploader v-model="file" />
            </div>

        </div>


        <pre>

<code >
                {{
                    `
<script setup lang="ts">

import EzUploader from 'ez-uploader'
import "ez-uploader/styles"

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