# Ez File Uploader Component For Vue 3

This a File Upload Component For Vue 3
   1. Support 2 way binding with v-model
   2. Strognly Typed With Typescript
   3. Fully Customizable With Props and Slots
   4. Eazy To Use 

## Usage

### npm i ez-uplpader
### yarn add ez-uploader


#### Single File
```html
<script>
   import EzUploader from 'ez-uploader';
   import 'ez-uploader/style'
   const file = ref(null);
</script>

<template>
  <EzUploader v-model="file"></EzUploader>
</template>
```

#### Multiple Files
```html
<script>
   import EzUploader from 'ez-uploader';
   import 'ez-uploader/style'
   const file = ref(null);
</script>

<template>
  <EzUploader multile v-model="files"></EzUploader>
</template>

```

## Props
- maxSize  :  number  (max file size per mb)
- maxCount  :  number (max count of files in multiple)
- quality  :  number (quality from 0.1 to 1 ) default   :   1
- accept  :  string (HTML Input File Accept Attribute)
## Events
- @validationError {errorMessage, errorType , fileName?}
