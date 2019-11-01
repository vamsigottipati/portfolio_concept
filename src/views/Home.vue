<template>
  <div class="home" >
    <p class="hoverable" style="position: fixed;top: 10px; left: 30px;font-size: 20px;font-weight: 600;padding: 20px;" >Vamsi</p>
    <p class="hoverable" style="position: fixed;top: 40px; right: 30px;font-size: 15px;transform: rotate(90deg);font-weight: 600;padding: 20px;" >WORKS</p>
    <p class="hoverable" style="position: fixed;bottom: 30px; left: 10px;font-size: 15px;transform: rotate(-90deg);font-weight: 600;padding: 20px;" >CONTACT</p>
    <!-- <img src="../assets/main.png" class="ref_img" ref="main_img" :style="{ position: 'absolute', width: 'auto', height: 2*y/5 + 'px', top: posY + 'px', left: posX + 'px' }" alt="" srcset=""> -->
    <!-- <img src="../assets/main.svg" :style="{ width: posY/2 + 'px', height: posY + 'px' }" alt="" srcset=""> -->

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
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

</style>