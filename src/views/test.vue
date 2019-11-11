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
      <div ref="overlay" class="overlay"></div>
  


  
    </div>
  </template>
  
  <script>
  // import VanillaTilt from "vanilla-tilt";
  
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
      // VanillaTilt.init(this.$refs.main_circle, {
      //   "full-page-listening": true,
      //   "max-glare": 1,
      //   max: 10,
      //   speed: 100,
      //   reset: true
      // });
      window.addEventListener("scroll", this.mouseIsScrolling);
    },
    updated: function() {
    },
    destroyed: function() {
      window.removeEventListener("scroll", this.mouseIsScrolling);
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>

  .overlay {
    position: absolute;
    z-index: 90;
    background: transparent;
    top: 0px;
    left: 0px;
    height: 600vh;
    width: 100vw;
  }

  </style>