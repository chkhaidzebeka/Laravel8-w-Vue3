import { createApp } from "vue";

import SectionTitle from "./components/SectionTitle.vue";
import router from "./router";
import App from "./layouts/App.vue";


export const createMyApp = () => {
    const app = createApp(App);
    app.use(router);
    app.component("v-title", SectionTitle)
    
    return app;
}

