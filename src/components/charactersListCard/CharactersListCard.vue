<script setup>
import {useRoute} from "vue-router";

defineProps({
    id: Number,
    name: String,
    element: Object({
        image: String,
    }),
    img: String,
    path: Object({
        name: String
    }),
    rarity: Number
})

const {fullPath} = useRoute()

</script>

<template>
    <RouterLink :to="fullPath + '/' + id + '/overview'">
        <div
            class="flex flex-col justify-end px-2.5 py-2 relative overflow-hidden card"
            :style="{backgroundImage: `url(${img})`, backgroundColor: rarity === 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}"
        >
            <div>
                <img :src="element.image" alt="">
            </div>
            <p class="text-xl font-semibold z-10">{{name}}</p>
            <u class="text-xl z-10">{{path.name}}</u>
        </div>
    </RouterLink>
</template>

<style scoped>
.card {
    width: 160px;
    height: 224px;
    box-shadow: inset 0 -66px 50px 0 rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    color: var(--text-color);
    background-repeat: no-repeat;
    background-size: cover;
    transition: .2s ease;
    /*background-position-y: -52px;*/
    /*background-position-x: -52px;*/

    div {
        background-color: rgba(54, 54, 67, .45);
        backdrop-filter: blur(2px);
        width: 40px;
        height: 40px;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        position: absolute;
        top: 8px;
        left: 4px;
    }
}

.card:hover {
    transform: scale(1.1);
}
</style>