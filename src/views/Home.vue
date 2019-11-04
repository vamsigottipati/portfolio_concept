<template>
    <div class="home clickable" ref="home_cont" style="text-align: center;overflow-x: hidden;">
      <p class="hoverable" style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;" >Works</p>
      <p class="hoverable" style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;" >Contact</p>
      <div ref="main_box" class="main_box"></div>
      <div ref="overlay" class="overlay"></div>
      <div class="main_text_cont">
          <p ref="main_text" class="main_text" >Vamsi <br> Krishna</p>
      </div>
    </div>
  </template>
  
  <script>
  
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
        marLeft: 2,
        boxWidth: 48,
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
      window.addEventListener("scroll", this.mouseIsScrolling);
    },
    components: {},
    methods: {
      mouseIsMoving(event) {
          this.mouseX = event.pageX; 
          this.mouseY = event.pageY; 
      },
      mouseIsScrolling () {
          console.log(window.pageYOffset / this.y)
          var widthRed = window.pageYOffset / this.y
          var addWidth = ((widthRed * 48) / 2.018)
          this.boxWidth = 48 + addWidth
          if(this.boxWidth >= 96) {
            this.$refs.main_box.style.width = '96vw'
          } else {
            this.$refs.main_box.style.width = 48 + addWidth + 'vw'
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
    background: linear-gradient(0deg, #0038b1, #012c88);
    z-index: 900;
  }
  .main_text_cont {
    position: absolute;
    padding: 0px; 
    margin: 0px;
    z-index: 901;
    top: 0vh;
    left: 0vw;
    height: 100vh;
    width: 100vw;
    display: flex; flex-direction: column;
  }
  .main_text {
    padding: 0px; 
    margin: auto;
    text-align: left;
    font-weight: 900;
    color: white;
    font-size: 12rem;
    transition-timing-function: ease-in-out;
  }
  .overlay {
    position: absolute;
    z-index:90;
    background: transparent;
    top: 0px; left: 0px;
    height: 300vh;
    width: 100vw;
  }
  
  </style>