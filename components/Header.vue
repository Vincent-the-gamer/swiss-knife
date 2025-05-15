<template>
    <header fixed z-5 m-0 top-0 left-0 w-full>
        <div absolute h-full w-fit flex="~ row items-center justify-center">
            <img relative h-13 m-0 src="~/assets/img/swiss-knife.png" alt="logo" />
            <span relative font-size-7 m-inline-2>Swiss Knife</span>
        </div>
        <div absolute top-0 right-4 m-0 h-full font-size-30px flex="~ row items-center justify-center gap-3.5">
            <a class="logo" href="https://github.com/Vincent-the-gamer" target="_blank">
                <span class="gh-logo" i-carbon-logo-github />
            </a>
            <ColorMode class="logo" />
        </div>
    </header>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
$header-height: 3.8rem;

header {
    background-color: rgb(240, 240, 240);

    .dark-mode & {
        background-color: rgb(24, 24, 24);
        .gh-logo {
            color: white;
        }
    }

    height: $header-height;

    h1 {
        height: $header-height;
        left: 3.5rem;
        top: 0.5rem;
        width: fit-content;
    }

    .logo {
        transition: all, 200ms;
        cursor: pointer;
        &:hover {
            color: deeppink;
        }
    }
}

</style>