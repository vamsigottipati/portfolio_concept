<template>
    <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
        <p class="hoverable home_route_text" @click="$router.push('home')"
            style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
            Home</p>
        <p class="hoverable" @click="$router.push('works')"
            style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;">
            Contact</p>
        <img src="../assets/parser.png" class="main_cirle" ref="main_circle" />
        <!-- </div> -->
        <div class="works_cont" ref="works_cont">
            <p class="work 1" ref="1">Hash</p>
            <p class="work 2" ref="2">SARC</p>
            <p class="work 3" ref="3">Resume <br> Parser</p>
            <p class="work 4" ref="4">Resume <br> Builder</p>
            <p class="work 5" ref="5">Smart <br> Car <br> Parking</p>
            <div style="height: 10vh; width: 50vw; background: white;"></div>
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
            // var leftThreshImg = (window.innerWidth - this.$refs.main_circle.clientWidth)/2
            // this.$refs.main_circle.style.left = leftThreshImg + 'px'
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
                this.$refs.works_cont.style.transform = 'translateX(' + -leftThresh+'vw)'
                // var leftThreshImg = (window.innerWidth - this.$refs.main_circle.clientWidth)/2
                // this.$refs.main_circle.style.left = leftThreshImg + 'px'
            }
        }
    }
</script>

<style scoped>
    .main_cirle {
        position: fixed;
        top: 20vh;
        left: auto;
        right: auto;
        height: 60vh;
        width: auto;
        /* background: linear-gradient(45deg, #CB356B, #BD3F32); */
        /* background: linear-gradient(0deg, #0038b1, #012c88); */
        transform-style: preserve-3d;
        transform: perspective(1000px);
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
        text-align: left;
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
    @media screen and (max-width: 460px) {
        .hoverable {
            font-size: 20px;
        }
        .contact_overlay {
            width: 55px;
            height: 140px;
            top: calc(410vh - 140px);
        }
        .work {
            font-size: 2rem;
            padding-top: 40vh;
        }
        .work:first-of-type{
            margin-top: calc(10vh - 2rem);
        }
    }

</style>