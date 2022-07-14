import { createRouter, createWebHistory } from "vue-router";
import { authenticated } from "./middlewares/auth";

import auth from "./routes/auth";
import error from "./routes/error";
import home from "./routes/home";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...home,
        ...auth,
        ...error
    ]
})

router.beforeEach( async (to, from) => {
    authenticated({to, from, router})
    
    const middlewares = to.meta?.middlewares ?? []
    const length = middlewares.length
    for (let index = 0; index < length; index++) {
        const middleware = middlewares[index]        
        await middleware({to, from, router})
    }
})

export default router;