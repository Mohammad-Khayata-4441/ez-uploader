import { createApp, type App as AppType } from "vue";
import App from "./App.vue";
import EzUploader from "./ez-uploader.vue";

createApp(App).mount("#app");

export default {
  install: (app: AppType, options: any) => {
    app.component("ez-uploader", EzUploader);
  },
};

export { EzUploader };
