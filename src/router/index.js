import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";
import CharacterView from "@/views/CharacterView.vue";
import View404 from "@/views/View404.vue";
import CharactersList from "@/components/charactersList/CharactersList.vue";
import LightConesList from "@/components/lightConesList/LightConesList.vue";
import RelicsList from "@/components/relicsList/RelicsList.vue";
import Overview from "@/components/overview/Overview.vue";
import Eidolons from "@/components/eidolons/Eidolons.vue";

const routes = [
    {path: '/', redirect: '/characters'},
    {path: '/', component: MainView,
        children: [
            {path: 'characters', component: CharactersList},
            {path: 'light-cones', component: LightConesList},
            {path: 'relics', component: RelicsList}
        ]
    },
    {path: '/characters/:id', component: CharacterView,
        children: [
            {path: 'overview', component: Overview},
            {path: 'eidolons', component: Eidolons},
        ]
    },
    {path: '/:pathMatch(.*)', name: 'NotFound', component: View404}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
