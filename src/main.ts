import { createApp, type App as AppType } from 'vue'
import App from './App.vue'
import ElkoodFileUploader from './ElkoodFileUploader.vue'
createApp(App).mount('#app')

export default {
    install: (app: AppType, options: any) => {
        app.component('ElkoodFileUploader', ElkoodFileUploader)
    }
}

export { ElkoodFileUploader };
