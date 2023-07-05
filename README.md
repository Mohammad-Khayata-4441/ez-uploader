# Ez File Uploader Component For Vue 3

This a File Upload Component For Vue 3
   - ✅ Built With TypeScript 💙
   - ✅ 2 way binding support
   - ✅ Drag and Drop Support
   - ✅ File Compress Support Using compressorjs
   - ✅ Fully Customizable Styling Using Sass Variables !
   - ✅ Base 64 Support
   - ✅ Various File Extentions Preview Icons

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
  <EzUploader  multiple v-model="files"></EzUploader>
</template>

```

## Props


| Name           | Desc                                   | Default | Type                    |
| -------------- | -------------------------------------- | ------- | ----------------------- |
| base64         | Provide Base 64 for output             | false   | boolean                 |
| contain        | Contain Preview Images                 | true    | boolean                 |
| cover          | Cover Preview Images                   | false   | boolean                 |
| deleteBtnClass | class for delete btn                    |         | string                  |
| accept         | Set File Accept For the HTML File input | image/* | string (HTML Accept attribute) |
| quality        | Compress the quality of the uploaded image | 1 | number (0.1 to 1) |



## Events
- @validationError {errorMessage, errorType , fileName?}
- @base64Generated (base664 : string | string[])