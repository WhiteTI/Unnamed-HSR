<script setup>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Footer from "@/components/footerComponent/FooterComponent.vue";
</script>

<template>
    <Sidebar/>
    <div style="padding-left: 64px">
        <RouterView/>
        <Footer/>
    </div>
</template>

<style scoped>

</style>