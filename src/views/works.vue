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
        <div class="works_cont" ref="works_cont">
            <p class="work 1" ref="1">Work 1</p>
            <p class="work 2" ref="2">Work 2</p>
            <p class="work 3" ref="3">Work 3</p>
            <p class="work 4" ref="4">Work 4</p>
            <p class="work 5" ref="5">Work 5</p>
            <div style="height: 20vh; width: 50vw; background: white;"></div>
        </div>
    </div>
</template>

<script>

    import VanillaTilt from 'vanilla-tilt'

    export default {
        name: "home",
        data() {
            return {
                active: 1,
                x : window.innerWidth,
                y : window.innerHeight,
            };
        },
        mounted: function () {
            VanillaTilt.init(this.$refs.main_circle, {
                "full-page-listening": true,
                "max-glare": 1,
                max: 10,
                speed: 100,
            });
            this.$refs.works_cont.scrollTop = 0
            this.mouseIsScrolling()
            window.addEventListener("scroll", this.mouseIsScrolling);
            // window.addEventListener('mousemove', this.setTextShadowEvent)
        },
        updated: function() {
            // this.mouseIsScrolling()
            // window.addEventListener("scroll", this.mouseIsScrolling);
        },
        destroyed: function () {
            window.removeEventListener("scroll", this.mouseIsScrolling);
        },
        methods: {
            setTextShadowEvent () {
                this.mouseX = event.pageX;
                this.mouseY = event.pageY;
                var posY = (0 - (((this.y)/2-this.mouseY)/this.y)*16) + 'px '
                var posX = (0 - (((this.x)/2-this.mouseX)/this.x)*16) + 'px '
                var tot = posX + posY + '0 #aaa'
                this.$refs[this.active].style.textShadow = tot
            },
            mouseIsScrolling () {
                var leftThresh = (window.pageYOffset*25/this.$refs.works_cont.clientHeight)*3.5
                console.log(leftThresh)
                this.$refs.works_cont.style.transform = 'translateX(' + -leftThresh+'vw)'
            }
        }
    }
</script>

<style scoped>
    .main_cirle {
        position: fixed;
        top: calc(50vh - 35vmin);
        left: calc(50vw - 35vmin);
        height: 70vmin;
        width: 70vmin;
        border-radius: 50%;
        background: linear-gradient(45deg, #CB356B, #BD3F32);
        /* background: linear-gradient(0deg, #0038b1, #012c88); */
        transform-style: preserve-3d;
        transform: perspective(2000px);
        z-index: 0;
    }
    .works_cont {
        width: 200vw;
        height: auto;
        z-index: 975 !important;
        display: flex;
        flex-direction: column;
    }
    .work {
        font-size: 8rem;
        color: white;
        padding: 0px;
        margin: 0px;
        font-weight: 900;
        z-index: 985;
        padding-top: 20vh;
        padding-bottom: 20vh;
        align-self: flex-start;
    }
    
    .work:first-of-type{
        margin-top: calc(30vh - 4rem);
        padding-left: 25vw;
    }
    .work:nth-of-type(2){
        padding-left: 40vw;
    }
    .work:nth-of-type(3){
        padding-left:55vw;
    }
    .work:nth-of-type(4){
        padding-left: 70vw;
    }
    .work:nth-of-type(5){
        padding-left: 85vw;
        /* margin-bottom: 20vh !important; */
    }
    @media screen and (max-width: 768px) {
        .work {
            font-size: 4rem;
        }
        .work:first-of-type{
            margin-top: calc(30vh - 2rem);
            padding-left: 25vw;
        }
    }
    @media screen and (max-width: 576) {
        .work {
            font-size: 3rem;
        }
        .work:first-of-type{
            margin-top: calc(30vh - 2rem);
        }
        .works_cont{
            margin-left: -50vw;
        }

    }

</style>