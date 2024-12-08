<script setup>
import {inject, ref} from "vue";
import classes from "@/styles/components/overview/Overview.module.css"
import SkillInfo from "@/components/overview/SkillInfo.vue";

const character = inject("character");

const characterLevel = ref(8)
const activeSkill = ref(character.value.skills[0])

const stars = []
for (let i = 0; i < character.value.rarity; i++) {
    stars.push(i)
}

</script>

<template>
    <div class="flex justify-between mb-7">
        <div class="flex gap-x-7">
            <div class="overflow-hidden grid justify-center"
                :class="classes.imgBackground"
                 :style="{backgroundColor: character.rarity === 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}"
            >
                <img :src="character.image" alt="Character Image">
            </div>

            <div>
                <div class="flex justify-start">
                    <img v-for="star in stars" src="@/assets/img/5star.svg" alt="stars">
                </div>

                <div :class="classes.path">
                    <div :class="classes.pathImg">
                        <img :src="character.path.image" alt="Character Path">
                    </div>
                    <div :class="classes.pathText">
                        {{character.path.name}}
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <p :class="classes.element">Element</p>
            <div class="flex items-center" :class="classes.elementLogo">
                <img :src="character.element.image" alt="element Logo">
                <p class="text-xl capitalize" :style="{color: character.element.color}">{{character.element.name}}</p>
            </div>
        </div>
    </div>
    
    <div :class="classes.description">
        {{character.description}}
    </div>

    <div class="w-full mt-6">
        <div class="flex items-center gap-x-5 p-4" :class="classes.levelBackground">
            <p class="text-xl font-medium">Level</p>
            <div class="w-12 h-12 text-xl font-medium flex justify-center items-center" :class="classes.level">
                {{character.levels[characterLevel - 1].level}}
            </div>

            <div class="flex items-center justify-center" :class="classes.inputWrapper">
                <input type="range" min="1" max="8" step="1" v-model="characterLevel" style="width: 312px;">
            </div>
        </div>

        <div class="flex gap-x-1">
            <div class="py-5 pl-2 flex items-center" :class="classes.levelStats">
                <img src="@/assets/img/Icon_ATK.png" alt="ATK logo">
                <p class="text-lg font-light ml-1">ATK</p>
                <span class="font-medium text-xl ml-9">
                    {{character.levels[characterLevel - 1].atk}}
                </span>
            </div>
            <div class="py-5 pl-2 flex items-center" :class="classes.levelStats">
                <img src="@/assets/img/Icon_DEF.webp" alt="DEF logo">
                <p class="text-lg font-light ml-1">DEF</p>
                <span class="font-medium text-xl ml-9">
                    {{character.levels[characterLevel - 1].def}}
                </span>
            </div>
            <div class="py-5 pl-2 flex items-center" :class="classes.levelStats">
                <img src="@/assets/img/Icon_HP.webp" alt="HP logo">
                <p class="text-lg font-light ml-1">HP</p>
                <span class="font-medium text-xl ml-9">
                    {{character.levels[characterLevel - 1].hp}}
                </span>
            </div>
            <div class="py-5 pl-2 flex items-center" :class="classes.levelStats">
                <img src="@/assets/img/Icon_SPD.webp" alt="SPD logo">
                <p class="text-lg font-light ml-1">Speed</p>
                <span class="font-medium text-xl ml-9">
                    {{character.levels[characterLevel - 1].spd}}
                </span>
            </div>
        </div>
    </div>

    <div class="w-full mt-6" :class="classes.talents">
        <h3 class="font-medium text-4xl mb-6">Skills</h3>

        <div class="flex gap-x-10">
            <div class="flex flex-col gap-y-4 bg-black-24 p-4">
                    <div class="cursor-pointer rounded-lg grid place-content-center text-lg font-bold border-2 border-gray-500 text-gray-500" :class="classes.talentType"
                         v-for="skill in character.skills" :key="skill.id"
                         @click="activeSkill = skill"
                         :style="skill.id === activeSkill.id ? {borderColor: character.element.color, color: character.element.color} : {}"
                    >
                        <span>{{skill.type}}</span>
                    </div>
            </div>

            <div class="w-full">
                <div v-for="skill in character.skills" :key="skill.id"
                     class="py-4 w-full"
                     :style="{display: activeSkill.id === skill.id ? 'block' : 'none'}"
                >
                    <SkillInfo :skill="skill" />
                </div>
            </div>
        </div>
    </div>

    <div class="flex gap-x-4 mt-5 content-stretch">
        <div v-for="trace in character.traces" :key="trace.id" class="basis-1/3 bg-black-24 rounded-b">
            <div class="flex items-center py-2 px-4 text-lg font-semibold gap-x-5 bg-black-19 rounded-t">
                <img :src="trace.image" alt="trace icon" class="h-16">
                <span>{{trace.name}}</span>
            </div>

            <hr>

            <div class="py-2 px-4 max-h-96 overflow-y-auto">
                <p>{{trace.description}}</p>
            </div>
        </div>
    </div>

    <div class="flex gap-x-4 mt-5">
        <div v-for="subTrace in character.subTrases" :key="subTrace" class="basis-1/3 bg-black-19 flex items-center justify-center h-16 text-lg font-semibold">
            <span>{{subTrace.replace(':', ' ')}}</span>
        </div>
    </div>
</template>

<style scoped>

</style>