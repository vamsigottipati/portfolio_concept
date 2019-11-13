<template>
  <div class="pageWrapper">
    <p class="hoverable" @click="$router.push('/')"
      style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
      Home</p>
    <p class="hoverable" @click="$router.push('works')"
      style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;">
      Contact</p>
    <div ref="overlay" class="overlay"></div>
    <div class="sideBox" ref="sideBox"></div>
    <div class="sideboxTextWrapper">
        <p class="heading hoverable" ref="heading">Hash</p>
        <p class="description" ref="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ut non qui, vel eveniet assumenda velit est adipisci ipsum modi.</p>
    </div>
    <img :src="this.hashImg" ref="mainImg" class="mainImg" alt="">
    <div></div>
  </div>
</template>


<style scoped>
  .sideBox {
    position: fixed;
    top: 10vh;
    height: 80vh;
    right: 2vw;
    width: 0vw;
    background: linear-gradient(45deg, #0575E6, #021B79  );
    /* background: linear-gradient(45deg, #CB356B, #BD3F32); */
    z-index: 0;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sideboxTextWrapper {
    position: fixed;
    top: 10vh;
    height: 80vh;
    right: 2vw;
    width: 40vw;
    z-index: 990;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .heading {
    text-align: left;
    align-self: flex-start;
    margin: 0px;
    padding: 0px;
    margin-left: -6vw;
    font-weight: 900;
    font-size: 5vw;
    opacity: 0;
    z-index: 990;
  }
  .description {
    text-align: left;
    align-self: flex-start;
    margin: 0px;
    padding: 0px;
    margin-left: -6vw;
    font-weight: 900;
    font-size: 1.7vw;
    padding-top: 5vmin;
    padding-right: 15vw;
    opacity: 0;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .mainImg {
    position: fixed;
    height: auto;
    top: 10vh;
    width: 20vw;
    left: 15vw;
    opacity: 0;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 300vh;
    z-index: 1;
  }
</style>


<script>

  import VanillaTilt from 'vanilla-tilt'

  export default {
    name: 'test',
    data() {
      return {
        hashImg: require('../assets/hash.png'),
        sarcImg: require('../assets/sarc.png'),
        builderImg: require('../assets/builder.png'),
        parserImg: require('../assets/parser.png'),
        scpImg: require('../assets/hash.png'),
        scrollRatio: window.pageYOffset,
        prevPageOff: 0,
        curImg: 0,
        imgArr: [this.hashImg, this.sarcImg, this.builderImg, this.parserImg, this.scpImg],
        scrollStop: function (callback) {
          if (!callback || typeof callback !== 'function') return;
          var isScrolling;
          window.addEventListener('scroll', function () {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
              callback()
            }, 66);
          }, false)
        }
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
      this.setWidth()
      setTimeout(() => {
        this.initTilt()
      }, 1000);
      this.afterScroll()
    },
    methods: {
      afterScroll () {
        var vm = this
        this.scrollStop(function () {
          if((window.pageYOffset - vm.prevPageOff) > 0) {
            console.log('scrolling down')
          } else {
            console.log('scrolling up');
          }
          vm.prevPageOff = window.pageYOffset
        })
      },
      setWidth() {
        setTimeout(() => {
          this.$refs.sideBox.style.width = '40vw'
          setTimeout(() => {
            this.$refs.mainImg.style.opacity = '1'
            this.$refs.mainImg.style.top = (window.innerHeight - this.$refs.mainImg.clientHeight)/2 + 'px'
          }, 700);
          setTimeout(() => {
            this.$refs.heading.style.opacity = '1'
            this.$refs.description.style.opacity = '1'
          }, 700);
        }, 500);
      },
      initTilt () {
        VanillaTilt.init(this.$refs.mainImg, {
            "full-page-listening": true,
            "max-glare": 1,
            max: 30,
            speed: 100,
        });
      },
    }
  }

</script>