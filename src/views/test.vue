<template>
    <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
      <p class="hoverable" style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;" >Works</p>
      <p class="hoverable" style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;" >Contact</p>
      <div ref="main_box" class="main_box"></div>
      <div ref="overlay" class="overlay"></div>
      <p ref="main_text" class="main_text" >Vamsi <br> Krishna</p>
    </div>
  </template>
  
  <script>
  
  // import { eventBus } from '../eventBus.js';
  
  export default {
    name: "home",
    data() {
      return {
        x: 0,
        y: 0,
        posX: 0,
        posY: 0,
        mouseX: 0,
        mouseY: 0,
        scrollCount: 0,
        marLeft: 2,
        stage: 0,
        lastScrollTop: 0
      };
    },
    mounted: function() {
      this.x = window.innerWidth;
      this.y = window.innerHeight;
      this.posY  = this.y
      this.posX =  this.x
      console.log(this.y)
      window.addEventListener('mousemove',this.mouseIsMoving);
      // window.addEventListener('scroll',this.a);
      window.addEventListener("scroll", this.mouseIsScrolling);
    },
    components: {},
    methods: {
      mouseIsMoving(event) {
          this.mouseX = event.pageX; 
          this.mouseY = event.pageY; 
          // var centerX = this.x / 2
          // var centerY  = this.y / 2
          // this.posY = 3*this.y/10 - ((this.mouseY - centerY)/this.y * 20)
          // this.posX =  (this.x - this.$refs.main_img.clientWidth)/2 - ((this.mouseX - centerX)/this.x * 20)
          // this.posY = ((this.mouseY - centerY)/this.y * 20)
          // this.posX = ((this.mouseX - centerX)/this.x * 20)
          // this.$refs.main_text.style.top = (((26/100*this.y) - ((this.mouseY - centerY)/this.y * 5)) + 'px')
          // this.$refs.main_text.style.left = (((32/100*this.x) - ((this.mouseX - centerX)/this.x * 5)) + 'px')
      },
      mouseIsScrolling () {
        console.log(this.stage)
        var st = window.pageYOffset || document.body.scrollTop; 
        if(this.stage == 0) {
  
          if(st > this.lastScrollTop) {
            this.scrollCount = this.scrollCount + 2
            if(this.scrollCount >= 46) {
              this.stage = 1
              this.scrollCount = 46
              this.$refs.main_box.style.width = '96vw'
            } else {
              this.$refs.main_box.style.width = 50 + this.scrollCount + 'vw'
            }
          } else {
            this.scrollCount = this.scrollCount - 2
            if(this.scrollCount <= 0) {
              this.scrollCount = 0
              this.$refs.main_box.style.width = '50vw'
            } else {
              this.$refs.main_box.style.width = 50 + this.scrollCount + 'vw'
            }
          }
  
        } else {
          if(this.stage == 1) {
  
            if(st > this.lastScrollTop) {
              this.marLeft = this.marLeft + 2
              if(this.marLeft >= 50) {
                // this.stage = 2
                this.marLeft = 50
                this.scrollCount = -2
                this.$refs.main_box.style.width = '48vw'
                this.$refs.main_box.style.left = '50vw'
              } else {
                this.$refs.main_box.style.left = this.marLeft + 'vw'
                this.scrollCount = 48 - this.marLeft
                this.$refs.main_box.style.width = 50 + this.scrollCount + 'vw'
              }
            } else {
              this.marLeft = this.marLeft - 2
              if(this.marLeft <= 2) {
                this.stage = 0
                this.marLeft  = 2
                this.scrollCount = 48
                this.$refs.main_box.style.left = '2vw'
                this.$refs.main_box.style.width = '96vw'
              } else {
                this.scrollCount = this.scrollCount + 2
                this.$refs.main_box.style.width = 50 + this.scrollCount + 'vw'
                this.$refs.main_box.style.left = this.marLeft + 'vw'
              }
            }
  
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .ref_img {
    transition: ease-in-out;
  }
  .main_box {
    position: fixed;
    top: 8vh;
    height: 84vh;
    width: 48vw;
    left: 2vw;
    background: #012c88;
    z-index: 900;
  }
  .main_text {
    position: fixed;
    padding: 0px; 
    margin: 0px;
    text-align: left;
    font-weight: 900;
    color: white;
    z-index: 992;
    top: 26vh;
    left: 32vw;
    font-size: 20vh;
    transition-timing-function: ease-in-out;
  }
  .overlay {
    position: absolute;
    z-index:90;
    background: transparent;
    top: 0px; left: 0px;
    height: 350vh;
    width: 100vw;
  }
  
  </style>
  
    