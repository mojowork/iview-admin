<template>
    <div class="not-found">
        <h1>404</h1>
    </div>
</template>

<script>
    export default {
        name: '404'   
    }
</script>

<style scoped lang="scss">
@import '~styles/index.scss';
.not-found{
    @include fullScreen();
    @include etchedText();
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>