<script setup>
import {ref} from "vue";
import classes from '@/styles/components/overview/Overview.module.css'

const {skill} = defineProps({
    skill: Object
})

const skillLevel = ref(9)

switch (skill.type) {
    case 'Basic ATK':
        skillLevel.value = 5
        break;
    case 'Technique':
        skillLevel.value = 1
        break;
}

</script>

<template>
    <div class="flex items-center gap-x-5 mb-2">
        <p class="text-xl font-medium">Level</p>
        <div class="w-12 h-12 text-xl font-medium flex justify-center items-center" :class="classes.level">
            {{skillLevel}}
        </div>
        <div v-if="skill.type === 'Basic ATK'" style="width: 412px;" class="flex items-center justify-center" :class="classes.inputWrapper">
            <input style="width: 392px;" type="range" min="1" max="9" step="1" v-model="skillLevel"/>
        </div>
        <div  v-else-if="skill.type === 'Technique'"></div>
        <div v-else style="width: 412px;" class="flex items-center justify-center" :class="classes.inputWrapper">
            <input style="width: 392px;" type="range" min="1" max="15" step="1" v-model="skillLevel"/>
        </div>
    </div>

    <hr>

    <div class="flex bg-black-19 p-2 gap-x-4 mb-1">
        <div class="w-16 border rounded border-white-ebe">
            <img :src="skill.image" alt="">
        </div>
        <div class="flex flex-col ">
            <div class="font-semibold">{{skill.name}}</div>
            <div>{{skill.target}}</div>
        </div>
    </div>

    <div class="bg-black-19 p-2">
        {{skill.skillStats[skillLevel - 1].description}}
    </div>
</template>

<style scoped>

</style>