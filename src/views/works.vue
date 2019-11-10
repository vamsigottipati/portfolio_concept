<template>
  <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
    <p
      class="hoverable home_route_text"
      @click="$router.push('home')"
      style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;"
    >Home</p>
    <p
      class="hoverable"
      @click="$router.push('works')"
      style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;"
    >Contact</p>
    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-vamsi.appspot.com/o/hash.png?alt=media&token=424452fc-3181-42ee-8eb5-b1234f28a0f1" class="main_cirle" ref="main_circle" />
    <div ref="overlay" class="overlay"></div>

    <div ref="1" class="worksPlaceholderTextCont">
        <p class="worksPlaceholderText">Hash</p>
    </div>

    <div ref="2" class="worksPlaceholderTextCont">
        <p class="worksPlaceholderText">SARC</p>
    </div>

    <div ref="3" class="worksPlaceholderTextCont">
        <p class="worksPlaceholderText">Resume <br> Parser</p>
    </div>

    <div ref="4" class="worksPlaceholderTextCont">
        <p class="worksPlaceholderText">Resume <br> Builder</p>
    </div>

    <div ref="5" class="worksPlaceholderTextCont">
        <p class="worksPlaceholderText">Smart <br> Car <br> Parking</p>
    </div>

    <!-- <div class="works_cont" ref="works_cont">
            <p class="work 1" ref="1">Hash</p>
            <p class="work 2" ref="2">SARC</p>
            <p class="work 3" ref="3">Resume <br> Parser</p>
            <p class="work 4" ref="4">Resume <br> Builder</p>
            <p class="work 5" ref="5">Smart <br> Car <br> Parking</p>
            <div style="height: 10vh; width: 50vw; background: white;"></div>
    </div>-->

  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";

export default {
  name: "home",
  data() {
    return {
      active: 1,
      x: window.innerWidth,
      y: window.innerHeight,
      curP: 1,
      prevP: 0,
      hashImg: require('../assets/hash.png'),
      sarcImg: require('../assets/sarc.png'),
      builderImg: require('../assets/builder.png'),
      parserImg: require('../assets/parser.png'),
      scpImg: require('../assets/hash.png'),
    };
  },
  mounted: function() {
    VanillaTilt.init(this.$refs.main_circle, {
      "full-page-listening": true,
      "max-glare": 1,
      max: 10,
      speed: 100
    });
    this.setMargin()
    window.addEventListener("scroll", this.mouseIsScrolling);
  },
  updated: function() {
    // this.mouseIsScrolling()
    // window.addEventListener("scroll", this.mouseIsScrolling);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.mouseIsScrolling);
  },
  methods: {
    setTextShadowEvent() {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
      var posY = 0 - ((this.y / 2 - this.mouseY) / this.y) * 16 + "px ";
      var posX = 0 - ((this.x / 2 - this.mouseX) / this.x) * 16 + "px ";
      var tot = posX + posY + "0 #aaa";
      this.$refs[this.active].style.textShadow = tot;
    },
    mouseIsScrolling () {
        var scrollRatio = window.pageYOffset / window.innerHeight
        if(scrollRatio < 2 && scrollRatio >= 0) {
            // this.curP = 1
            // this.prevP = 0
            // this.setMargin()
            // this.$refs[this.prevP].style.opacity = '0'
            // this.$refs[this.curP].style.opacity = '1'
            // this.$refs[this.curP].style.left = -20 + scrollRatio*30 + 'vw'
            this.$refs.main_circle.style.transitionDelay = '0.5s'
            this.$refs.main_circle.style.opacity = '0'
            this.$refs.main_circle.src = this.hashImg
            this.$refs.main_circle.style.opacity = '1'
            this.$refs.main_circle.style.transitionDelay = '0s'
        } else {
            if(scrollRatio > 2 && scrollRatio < 4) {
                // this.curP = 2
                // this.prevP = 1
                // this.setMargin()
                // this.$refs[this.prevP].style.opacity = '0'
                // this.$refs[this.curP].style.opacity = '1'
                // this.$refs[this.curP].style.left = -20 + (scrollRatio - 2)*30 + 'vw'
                this.$refs.main_circle.style.transitionDelay = '0.5s'
                this.$refs.main_circle.style.opacity = '0'
                this.$refs.main_circle.src = this.sarcImg
                this.$refs.main_circle.style.opacity = '1'
                this.$refs.main_circle.style.transitionDelay = '0s'
            } else {
                if(scrollRatio > 4 && scrollRatio < 6) {
                    // this.curP = 3
                    // this.prevP = 2
                    // this.setMargin()
                    // this.$refs[this.prevP].style.opacity = '0'
                    // this.$refs[this.curP].style.opacity = '1'
                    // this.$refs[this.curP].style.left = -20 + (scrollRatio - 4)*30 + 'vw'
                    this.$refs.main_circle.style.transitionDelay = '0.5s'
                    this.$refs.main_circle.style.opacity = '0'
                    this.$refs.main_circle.src = this.builderImg
                    this.$refs.main_circle.style.opacity = '1'
                    this.$refs.main_circle.style.transitionDelay = '0s'
                } else {
                    if(scrollRatio > 6 && scrollRatio < 8) {
                        // this.curP = 4
                        // this.prevP = 3
                        // this.setMargin()
                        // this.$refs[this.prevP].style.opacity = '0'
                        // this.$refs[this.curP].style.opacity = '1'
                        // this.$refs[this.curP].style.left = -20 + (scrollRatio - 6)*30 + 'vw'
                        this.$refs.main_circle.style.transitionDelay = '0.5s'
                        this.$refs.main_circle.style.opacity = '0'
                        this.$refs.main_circle.src = this.parserImg
                        this.$refs.main_circle.style.opacity = '1'
                        this.$refs.main_circle.style.transitionDelay = '0s'
                    } else {
                        // this.curP = 5
                        // this.prevP = 4
                        // this.setMargin()
                        // this.$refs[this.prevP].style.opacity = '0'
                        // this.$refs[this.curP].style.opacity = '1'
                        // this.$refs[this.curP].style.left = -20 + (scrollRatio - 8)*30 + 'vw'
                        this.$refs.main_circle.style.transitionDelay = '0.5s'
                        this.$refs.main_circle.style.opacity = '0'
                        this.$refs.main_circle.src = this.scpImg
                        this.$refs.main_circle.style.opacity = '1'
                        this.$refs.main_circle.style.transitionDelay = '0s'
                    }
                }
            }
        }
        console.log(this.prevP)

    },
    setMargin() {
        for (let index = 1; index < 6; index++) {
            if(this.curP == index) {
                this.$refs[index].style.display = 'flex'
            } else {
                this.$refs[index].style.display = 'none'
            }            
        }
    }
  }
};
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
.overlay {
  position: absolute;
  z-index: 90;
  background: transparent;
  top: 0px;
  left: 0px;
  height: 1200vh;
  width: 100vw;
}
.worksPlaceholderTextCont {
    position: fixed;
    left: -20vw;
    top: 20vh;
    width: 100vw;
    height: 60vh;
    display: none;
    flex-direction: column;
    justify-content: center;
}
.worksPlaceholderText {
    text-align: left;
    align-self: center;
    font-size: 8rem;
    color: white;
    text-shadow: 2px 0px #fff;
    font-weight: 900;
}

/* 
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
    } */
</style>