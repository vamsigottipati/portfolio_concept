<template>
  <div class="home" style="text-align: center;">
    <!-- <p class="hoverable" style="position: fixed;top: 10px; left: 30px;font-weight: 500;padding: 20px;z-index:990" >Vamsi</p> -->
    <p class="hoverable" style="position: fixed;top: 40px; right: 30px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;" >Works</p>
    <p class="hoverable" style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;" >Contact</p>
    <!-- <img src="../assets/main.png" class="ref_img" ref="main_img" :style="{ position: 'absolute', width: 'auto', height: 2*y/5 + 'px', top: posY + 'px', left: posX + 'px' }" alt="" srcset=""> -->
    <!-- <img src="../assets/main2.png" style="position: fixed;top: 10px; left: 30px;font-size: 20px;width: 50px; height: auto;" alt="" srcset=""> -->
    <div class="main_box"></div>
    <!-- <p>{{this.text}}</p>
    <p>{{this.text2}}</p> -->
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
      // text: '',
      // text2: '',
      mouseX: 0,
      mouseY: 0
    };
  },
  mounted: function() {
    this.x = window.innerWidth;
    this.y = window.innerHeight;
    this.posY  = this.y
    this.posX =  this.x
    console.log(this.x, this.y);
    window.addEventListener('mousemove',this.mouseIsMoving);
  },
  components: {},
  methods: {
    mouseIsMoving(event) {
        this.mouseX = event.pageX; 
        this.mouseY = event.pageY; 
        var centerX = this.x / 2
        var centerY  = this.y / 2
        this.posY = 3*this.y/10 - ((this.mouseY - centerY)/this.y * 20)
        this.posX =  (this.x - this.$refs.main_img.clientWidth)/2 - ((this.mouseX - centerX)/this.x * 20)
    }
  }
};
</script>

<style scoped>
.ref_img {
  transition: ease-in-out;
}
.main_box {
  position: absolute;
  top: 8vh;
  height: 84vh;
  width: 48vw;
  left: 2vw;
  background: #012c88;
  z-index: 90;
}

</style>