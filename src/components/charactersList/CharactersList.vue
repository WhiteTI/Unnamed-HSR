<script setup>
import CharactersListCard from "@/components/charactersListCard/CharactersListCard.vue";
import {useQuery} from "@tanstack/vue-query";
import {getCharacters} from "@/services/characterService.js";

const {data} = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters
})

</script>

<template>
    <div class="flex flex-wrap gap-5">
        <CharactersListCard v-for="item in data"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :element="item.element"
            :img="item.listImage"
            :path="item.path"
            :rarity="item.rarity"
        />
    </div>
</template>