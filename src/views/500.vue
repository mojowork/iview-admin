<template>
    <div class="server-error">
        <h1>server error</h1>
    </div>
</template>

<script>
    export default {
        name: '500'   
    }
</script>

<style scoped lang="scss">
@import '~styles/index.scss';
.server-error{
    @include fullScreen();
    @include etchedText();
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>