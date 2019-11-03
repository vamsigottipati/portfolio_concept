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
    window.addEventListener("scroll", this.mouseIsScrolling);
  },
  components: {},
  methods: {
    mouseIsMoving(event) {
        this.mouseX = event.pageX; 
        this.mouseY = event.pageY; 
    },
    mouseIsScrolling () {
      console.log(this.stage)
      var st = window.pageYOffset || document.body.scrollTop; 
      if(this.stage == 0) {
        if(st > this.lastScrollTop) {
            
        } else {

        }

      } else {
        if(this.stage == 1) {

          if(st > this.lastScrollTop) {

          } else {

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