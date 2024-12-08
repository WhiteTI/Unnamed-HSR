<script setup>
import {RouterLink} from "vue-router";

defineOptions({
    inheritAttrs: false
})

const props = defineProps({
    ...RouterLink.props,
    activeStyle: Object
})
</script>

<template>
    <RouterLink v-bind="$props" custom v-slot="{isActive, href, navigate}">
        <a v-bind="$attrs" :href="href" @click="navigate" :style="isActive ? activeStyle : null">
            <slot/>
        </a>
    </RouterLink>
</template>