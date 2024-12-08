<script setup>
import {useQuery} from "@tanstack/vue-query";
import {getLightCones} from "@/services/lightConeService.js";

const {data, isLoading} = useQuery({
    queryKey: ['light-cones'],
    queryFn: getLightCones
})
</script>

<template>
<div v-if="isLoading">Loading...</div>
<div v-else class="flex flex-wrap gap-5">
    <div v-for="cone in data" :key="cone.id" class="rounded-t-lg card basis-1/3">
        <div class="flex gap-x-2 rounded-t-lg cardTitle">
            <div style="background-color: var(--5-star-color); background-image: linear-gradient(244deg, rgba(49, 43, 71, .5294117647058824), transparent);">
                <img :src="cone.image" alt="" class="cardImg">
            </div>

            <div class="text-lg font-medium p-1">
                <div >
                    <p class="text-xl">{{cone.name}}</p>
                    <p class="font-semibold text-xl">{{cone.rarity}}&#9733;</p>
                </div>
                <div class="flex items-center gap-x-2 mt-3">
                    <img :src="cone.path.image" alt="" style="height: 32px;" />
                    <p>{{cone.path.name}}</p>
                </div>
            </div>
        </div>

        <div class="flex gap-x-0.5">
            <div class="py-2 pl-2 flex items-center basis-1/3 bg-black-19">
                <img src="@/assets/img/Icon_HP.webp" alt="HP logo" style="width: 31px; height: 31px;">
                <p>HP: {{cone.hp}}</p>
            </div>
            <div class="py-2 pl-2 flex items-center basis-1/3 bg-black-19">
                <img src="@/assets/img/Icon_ATK.png" alt="ATK logo" style="width: 31px; height: 31px;">
                <p>ATK: {{cone.atk}}</p>
            </div>
            <div class="py-2 pl-2 flex items-center basis-1/3 bg-black-19">
                <img src="@/assets/img/Icon_DEF.webp" alt="DEF logo" style="width: 31px; height: 31px;">
                <p>DEF: {{cone.def}}</p>
            </div>
        </div>

        <div class="overflow-y-auto p-3 cardDesc">
            {{cone.description}}
        </div>

    </div>
</div>
</template>

<style scoped>
.card {
    /*width: 380px;*/
    max-height: 440px;
    background-color: var(--gray-36);
}

.cardTitle {
    background-color: var(--gray-36);
    height: 120px;

    .cardImg {
        height: 120px;
    }
}

.cardDesc {
    max-height: 270px;
}

.loadMore {
    height: 54px;
    width: 180px;
    background-color: #28327e;
    color: var(--text-color);
    border-radius: 6px;
    transition: opacity ease-in .5s ;

    &:active {
        filter: opacity(0.6);
    }

    &:disabled {
        filter: saturate(0);
    }
}
</style>