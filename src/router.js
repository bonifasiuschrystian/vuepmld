import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [{
        path: "",
        component: () =>
            import ("./components/Main.vue"),
        children: [{
            path: "/",
            name: "checkout",
            component: () =>
                import ("./components/views/Checkout.vue"),

        }]
    }]
})

export default router