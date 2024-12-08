<script setup>
import {inject} from "vue";

const character = inject("character");
</script>

<template>
    <div>
        <div v-for="eidolon in character.eidolons" :key="eidolon.id" class="mb-5">
            <div class="flex items-center gap-x-2 mb-1 rounded-t h-28">
                <div class="py-3 px-3 bg-black-19 h-full">
                    <img :src="eidolon.image" alt="eidolon icon" class="w-28">
                </div>
                <div class="w-full">
                    <div class="py-3 px-6 bg-black-19 text-2xl font-semibold mb-2">
                        <span>{{eidolon.name}}</span>
                    </div>
                    <div class="py-3 px-6 rounded-b bg-black-19">
                        <span>{{eidolon.description}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>