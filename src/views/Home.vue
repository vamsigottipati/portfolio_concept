<template>
    <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
      <p class="hoverable" style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;" >Works</p>
      <p class="hoverable" style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;" >Contact</p>
      <div ref="main_box" class="main_box"></div>
      <div ref="overlay" class="overlay"></div>
      <div ref="main_text_cont" class="main_text_cont">
          <p ref="main_text" class="main_text" >Vamsi <br> Krishna</p>
      </div>
      <div ref="secondary_text_cont" class="secondary_text_cont">
          <p ref="secondary_text" class="secondary_text" >Developer <br> <strong>Designer</strong>  </p>
      </div>
      <div ref="teritiary_text_cont" class="teritiary_text_cont">
          <p ref="teritiary_text" class="teritiary_text" > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur labore, culpa accusamus repudiandae nesciunt pariatur! Voluptates vero laudantium animi. Amet? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur labore, culpa accusamus repudiandae nesciunt pariatur! Voluptates vero laudantium animi. Amet? </p>
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
        mainTextMarLeft: 0,
        secondaryTextMarTop: 100,
        stage: 0,
        lastScrollTop: 0,
        secondaryTextMarLeft: 0,
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
          var widthRed = window.pageYOffset / this.y
          
          // box movement

          var addWidth = ((widthRed * 48) / 2.018)
          this.boxWidth = 48 + addWidth
          if(this.boxWidth >= 96) {
            this.$refs.main_box.style.width = '96vw'
            this.$refs.main_box.style.position = "absolute"
            this.$refs.main_box.style.top = "208vh"
          } else {
            this.$refs.main_box.style.position = "fixed"
            this.$refs.main_box.style.top = "8vh"
            this.$refs.main_box.style.width = 48 + addWidth + 'vw'
          }

          // text movement

          var addLeft = (((widthRed * 100) / 1.018))
          this.mainTextMarLeft = addLeft
          if(this.mainTextMarLeft >= 100) {
            this.$refs.main_text_cont.style.left = '100vw'
          } else {
            this.$refs.main_text_cont.style.left = "" + this.mainTextMarLeft + 'vw'
          }

          // sencondary text

          if(((widthRed * 100) / 0.75) >= 95) {
            this.secondaryTextMarTop = (145 - ((widthRed * 100) / 0.75)) * 1.5
            if(this.secondaryTextMarTop <= 0) {
              this.secondaryTextMarTop = 0
              console.log((145 - ((widthRed * 100) / 0.75)) * 1.5)
              this.secondaryTextMarLeft = ((145 - ((widthRed * 100) / 0.65)) * 1.1)
              this.$refs.secondary_text_cont.style.left = ((145 - ((widthRed * 100) / 0.75)) * 0.65) + 'vw'
            } else {
              this.$refs.secondary_text_cont.style.top = (145 - ((widthRed * 100) / 0.75)) * 1.5 + 'vh'
            }
          } else {
            this.secondaryTextMarTop = 100
            this.$refs.secondary_text_cont.style.top = "100vh"
          }


          // teritiary text

          if(((145 - ((widthRed * 100) / 0.75)) * 1.1) < -130) {
            this.$refs.teritiary_text_cont.style.opacity = '1'
          } else {
            this.$refs.teritiary_text_cont.style.opacity = '0'
          }

          if(widthRed > 3) {
            this.$refs.teritiary_text_cont.style.opacity = '0'
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
  .teritiary_text_cont {
    position: fixed;
    padding: 0px; 
    margin: 0px;
    z-index: 901;
    top: 0vh;
    left: 0vw;
    height: 100vh;
    width: 100vw;
    display: flex; flex-direction: column;
    opacity: 0;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .teritiary_text {
    padding: 15vw; 
    margin: auto;
    text-align: left;
    font-weight: 900;
    color: white;
    font-size: 2rem;
    transition-timing-function: ease-in-out;
  }
  .secondary_text_cont {
    position: fixed;
    padding: 0px; 
    margin: 0px;
    z-index: 901;
    top: 100vh;
    left: 0vw;
    height: 100vh;
    width: 100vw;
    display: flex; flex-direction: column;
  }
  .secondary_text {
    padding: 0px; 
    margin: auto;
    text-align: left;
    font-weight: 900;
    color: white;
    font-size: 6rem;
    transition-timing-function: ease-in-out;
  }
  .main_text_cont {
    position: fixed;
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
    font-size: 6rem;
    transition-timing-function: ease-in-out;
  }
  .overlay {
    position: absolute;
    z-index:90;
    background: transparent;
    top: 0px; left: 0px;
    height: 500vh;
    width: 100vw;
  }
  
  </style>