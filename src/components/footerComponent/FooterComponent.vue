<template>
    <footer class="bg-fixed footer">
        <div class="container mx-auto flex justify-between">
            <div class="pt-10 text-2xl">
                <p> FireFly.Base is a fan-made website for Honkai Star Rail players </p>
                <p> Website is not affiliated with miHoYo, all assets files are property of their original
                    owners </p>
            </div>

            <div class="mt-4 w-auto flex items-center gap-x-5">
                <div class='w-24'>
                    <a href='https://vuejs.org/' target='_blank'>
                        <img src='https://github.com/vuejs/docs/blob/main/src/public/logo-uwu.png?raw=true' alt="react logo"/>
                    </a>
                </div>

                <div class='w-16'>
                    <a href='https://tailwindcss.com/' target='_blank'>
                        <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' alt="react logo"/>
                    </a>
                </div>

                <div class='w-16'>
                    <a href='https://tanstack.com/query/latest' target='_blank'>
                        <img src='https://i2.wp.com/miro.medium.com/1*elhu-42TzQEdsFjKDbQhhA.png' alt="react logo"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    height: 160px;
    background-image: linear-gradient(0.00deg, rgba(0, 51, 114, 0.7) -174.763%,rgba(16, 16, 16, 0.4) 295.217%), url("@/assets/img/bgImage.webp");
    background-repeat: no-repeat;
    background-size: auto;
    background-position-x: center;
    background-position-y: bottom;
    color: var(--text-color);
}
</style>