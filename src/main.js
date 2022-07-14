import "@/assets/scss/app.scss"

import { createApp } from 'vue'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import router from './porviders/vue_router';
import store from './porviders/store'
import components from './components';


const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueCookies)

components.forEach( component => {
    app.component(component.name, component)
})

app.mount('#app')