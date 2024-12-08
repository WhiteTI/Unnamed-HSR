<script setup>
import {useRoute} from "vue-router";
import {getCharacter} from "@/services/characterService.js";
import {useQuery} from "@tanstack/vue-query";
import {provide} from "vue";
import NavLink from "@/extending/NavLink.vue";

const {params} = useRoute()
const id = params.id

const links = [
    {path: 'overview', text: 'Overview'},
    {path: 'builds', text: 'Builds'},
    {path: 'eidolons', text: 'Eidolons'},
    {path: 'teams', text: 'Teams'},
    {path: 'gallery', text: 'Gallery'},
]

const {data, isLoading} = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacter(id)
})

provide('character', data)

</script>

<template>
    <span v-if="isLoading"></span>
    <div v-else class="relative" :class="$style.bg">
        <div
            class="absolute z-0 w-full overflow-hidden" :class="$style.bgImage"
            :style="{backgroundImage: `url(${data.bgImage})`}"></div>
        <div class="z-0 absolute" :class="$style.imageShadow"></div>

        <div class="container mx-auto pt-64 relative z-10">
            <h1 class="font-bold uppercase mb-6" :class="$style.name">{{data.name}}</h1>

            <div class="flex">
                <nav class="flex flex-col" :class="$style.menu">
                    <NavLink v-for="link in links" :to="link.path"
                        :active-style="{fontWeight: '600', borderRight: `4px solid ${data.element.color}`, background: data.element.secondColor + '99'}"
                    >
                        {{link.text}}
                    </NavLink>
                </nav>

                <div class="w-full">
                    <h2
                        :class="$style.titleBlock"
                        :style="{
                            color: data.element.color,
                            borderBottom: `1px solid ${data.element.color}`,
                            background: `linear-gradient(90.00deg, color(from ${data.element.secondColor} srgb r g b / 0.78) 0%,rgba(0, 0, 0, 0) 50.929%),linear-gradient(270.00deg, rgb(31, 31, 39) 4.079%,rgba(31, 31, 39, 0.32) 74.152%)`
                        }"
                    >
                        {{$route.path.split('/').at(-1).toUpperCase()}}
                    </h2>

                    <main class="p-8 min-h-96" :class="$style.wrapper">
                        <RouterView/>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style module>
.bg {
    background-color: var(--primary-bg-color);
    color:  var(--text-color);
    min-height: 1400px;
    padding-bottom: 26px;
}

.bgImage {
    background-repeat: no-repeat;
    background-position: center;
    height: 800px;
    background-size: 70%;
}

.imageShadow {
    background: radial-gradient(80% 70% at 50% 25%,rgba(20, 20, 27, 0) 0.643%,rgba(20, 20, 27, 1) 100%);
    width: 100%;
    height: 800px;
}

.name {
    color: var(--text-color);
    font-size: 60px;
}

.titleBlock {
    box-sizing: border-box;
    border-radius: 0 6px 0 0;
    backdrop-filter: blur(12px);
    background: linear-gradient(90.00deg, rgba(61, 24, 24, 0.78) 0%,rgba(0, 0, 0, 0) 50.929%),linear-gradient(270.00deg, rgb(31, 31, 39) 4.079%,rgba(31, 31, 39, 0.32) 74.152%);
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    line-height: 44px;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 32px;
}

.menu {
    margin-top: 21px;
    font-size: 20px;

    a {
        width: 180px;
        padding: 14px 20px 14px 16px;
        border-radius: 4px 0 0 4px;
    }

    a:hover {
        background-color: rgba(54, 54, 67, 0.4);
    }
}

.wrapper {
    border-radius: 0 0 6px 0;
    backdrop-filter: blur(12px);
    background: radial-gradient(112.29% 61.47% at 49% -13%,rgba(31, 31, 39, -0.47),rgb(31, 31, 39) 43.546%)
}
</style>