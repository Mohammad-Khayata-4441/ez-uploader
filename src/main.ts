import { createApp, type App as AppType } from 'vue'
import App from './App.vue'
import FileUploader from './FileUploader.vue'
createApp(App).mount('#app')

export default {
    install:(app:AppType ,options:any)=>{
        app.component('FileUploader',FileUploader)
    }
} 

export {FileUploader};
