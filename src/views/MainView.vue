<script setup>

</script>

<template>
    <div>
        <div class="bg-fixed mainBgImage" >
            <div class="container mx-auto pt-56">
                <h1 class="font-bold uppercase title" >
                    {{$route.path.slice(1).replace('-', ' ')}} List
                </h1>

                <div>
                    Filters
                </div>
            </div>
        </div>

        <main class="mainBgColor" >
            <div class="container mx-auto py-8 min-h-screen relative">
                <RouterView/>
            </div>
        </main>
    </div>
</template>

<style scoped>
.mainBgImage {
    height: 390px;
    box-shadow: inset 0 -200px 100px 0 rgba(0, 0, 0, 0.56);
    background-image: url("@/assets/img/bgImage.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-position-y: -233px;
}

.mainBgColor {
    background-color: var(--primary-bg-color);
}

.title {
    color: var(--text-color);
    font-size: 60px;
}
</style>