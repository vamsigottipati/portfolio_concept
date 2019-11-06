<template>
    <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
        <div class="main_cirle"></div>
    </div>
</template>

<script>

    export default {
        name: "home",
        data() {
            return {
            };
        },
    }
</script>

<style scoped>
    .main_cirle {
        position: absolute;
        top: calc(50vh - 16.5rem);
        left: calc(50vw - 16.5rem);
        height: 33rem;
        width: 33rem;
        border-radius: 50%;
        background: #fff; 
    }
</style>