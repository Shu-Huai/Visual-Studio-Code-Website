import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ChineseAbout from "./components/ChineseAbout.vue";
import EnglishAbout from "./components/EnglishAbout.vue";
let router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: "/Home" },
        { path: "/Home", component: Home },
        {
            path: "/About", component: About, children: [
                { path: "Chinese", component: ChineseAbout },
                { path: "English", component: EnglishAbout }
            ], redirect: "/About/Chinese", props: true
        }
    ]
});
export default router;