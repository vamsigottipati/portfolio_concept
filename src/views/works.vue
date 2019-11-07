<template>
    <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
        <p class="hoverable" @click="$router.push('/    ')"
            style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
            Home</p>
        <p class="hoverable" @click="$router.push('works')"
            style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;">
            Contact</p>
        <div class="main_cirle" ref="main_circle" >
            <!-- <div style="width: 11rem; height: 11rem; background: white;border-radius: 50%;margin-top: 11rem;margin-left: 11rem;transform: translateZ(20px)"></div> -->
        </div>
    </div>
</template>

<script>

    import VanillaTilt from 'vanilla-tilt'

    export default {
        name: "home",
        data() {
            return {
            };
        },
        mounted: function () {
            VanillaTilt.init(this.$refs.main_circle, {
                "full-page-listening": true,
                "max-glare": 1,
                max: 8,
                speed: 100,

            });
        }
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
        background: linear-gradient(45deg, #CB356B, #BD3F32);
        /* background: linear-gradient(0deg, #0038b1, #012c88); */
        transform-style: preserve-3d;
        transform: perspective(500px)
    }
</style>