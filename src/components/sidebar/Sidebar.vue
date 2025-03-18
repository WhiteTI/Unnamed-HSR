<template>
    <div class="z-40 w-16 fixed h-screen py-3 bg-black-24" :class="$style.sidebar">
        <div class="flex flex-col items-center">
            <div class="mb-7 w-12 h-12 rounded-xl overflow-hidden">
              <img src="@/assets/img/logo.jpg" alt="logo">
            </div>

            <div class="h-56">
                <div class="px-1 py-2 flex flex-col gap-y-2 overflow-hidden" :class="$style.gameLinks">
                    <a href="#">
                        <img src="@/assets/img/hsr.png" alt="hsr logo" :class="$style.active">
                    </a>
                    <a>
                        <img src="@/assets/img/genshin.png" alt="genshin logo">
                    </a>
                    <a>
                        <img src="@/assets/img/zzz.png" alt="zzz logo">
                    </a>
                </div>
            </div>

            <nav class="flex flex-col gap-y-7">
                <RouterLink to="/characters">
                    <img src="@/assets/img/characters.svg" alt="Characters">
                </RouterLink>
                <RouterLink to="/light-cones">
                    <img src="@/assets/img/weapon.svg" alt="Light Cones">
                </RouterLink>
                <RouterLink to="relics">
                    <img src="@/assets/img/art.svg" alt="Relics">
                </RouterLink>
            </nav>
        </div>
    </div>
</template>

<style module>
.sidebar {
    border-right: 1px solid var(--gray-36);
}

.gameLinks {
    height: 58px;
    border-radius: 16px;
    background-color: var(--black-19);
    transition: height .3s ease;

    & img {
        filter: saturate(0);
        transition: ease 0.3s;
        cursor: pointer;
    }

    .active {
        filter: saturate(1);
    }

    & img:hover {
        filter: saturate(1);
    }
}

.gameLinks:hover {
    height: 158px;
}
</style>