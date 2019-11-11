<!-- <template>
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
      <p class="workText" ref="work1">Hash</p>


      <div class="mainBox">
          <img :src="this.parserImg" ref="mainImg" class="mainImg" alt="">
      </div>

  
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
      VanillaTilt.init(this.$refs.mainImg, {
        "full-page-listening": true,
        "max-glare": 1,
        max: 10,
        speed: 100,
        reset: true
      });
      this.setPositions()
      window.addEventListener("scroll", this.mouseIsScrolling);
    },
    updated: function() {
    },
    destroyed: function() {
      window.removeEventListener("scroll", this.mouseIsScrolling);
    },
    methods: {
      mouseIsScrolling () {
        console.log('scrolling .........................')
      },
      setPositions () {
        for (let index = 1; index < 6; index++) {
          if(index == 1) {
            this.$refs['work' + index].style.top = 'calc(35vh - ' + (this.$refs['work' + index].clientHeight)/2 + 'px)'
            this.$refs['work' + index].style.left = 'calc(50vw - ' + (this.$refs['work' + index].clientWidth)/2 + 'px)'
          } else {
            this.$refs['work' + index].style.top = '-300vh;'
          }
        }
      }
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
  .mainBox {
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .mainImg {
    height: 70vmin;
    width: auto;
    max-width: 90vmin;
    align-self: center;
    margin-left: 20vw;
    z-index: 985;
  }
  /* .workTextCont {
    position: absolute;
    width: auto;
    height: auto;
    top: 0px;
    left: 0px;
    z-index: 980;
    display: flex;
    flex-direction: row;
    background: transparent;
    justify-content: center;
  } */
  .workText{
    font-size: 8rem;
    font-weight: 900;
    margin-left: -20vw;
    position: fixed;
    /* left: 30vw;
    top: 30vh; */
    z-index: 999;
  }

  </style> -->



  <template>
      <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
          <p class="hoverable" @click="$router.push('/    ')"
              style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
              Home</p>
          <p class="hoverable" @click="$router.push('works')"
              style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;">
              Contact</p>
          <img class="main_cirle" ref="main_circle" :src="this.hashImg"/>
          <div class="works_cont" ref="works_cont">
              <p class="work 1" ref="1">Work 1</p>
              <p class="work 2" ref="2">Work 2</p>
              <p class="work 3" ref="3">Work 3</p>
              <p class="work 4" ref="4">Work 4</p>
              <p class="work 5" ref="5">Work 5</p>
              <div style="padding-top: 7vh;padding-bottom: 7vh;"></div>
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
                  hashImg: require('../assets/hash.png'),
                  sarcImg: require('../assets/sarc.png'),
                  builderImg: require('../assets/builder.png'),
                  parserImg: require('../assets/parser.png'),
                  scpImg: require('../assets/hash.png'),
              };
          },
          mounted: function () {
              VanillaTilt.init(this.$refs.main_circle, {
                  "full-page-listening": true,
                  "max-glare": 1,
                  max: 10,
                  speed: 100,
              });
              window.addEventListener("scroll", this.mouseIsScrolling);
              // window.addEventListener('mousemove', this.setTextShadowEvent)
          },
          updated: function() {
              window.addEventListener("scroll", this.mouseIsScrolling);
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
                  var leftThresh = window.pageYOffset*25/this.$refs.works_cont.clientHeight
                  console.log(leftThresh)
                  this.$refs.works_cont.style.left = -leftThresh+'vw'
              }
          }
      }
  </script>
  
  <style scoped>
      .main_cirle {
          position: absolute;
          position: fixed;
          top: calc(50vh - 35vmin);
          left: calc(50vw - 15vmin);
          height: 70vmin;
          width: auto;
          /* background: linear-gradient(45deg, #CB356B, #BD3F32); */
          /* background: linear-gradient(0deg, #0038b1, #012c88); */
          transform-style: preserve-3d;
          transform: perspective(2000px);
          z-index: 970;
      }
      .works_cont {
          position: absolute;
          width: 200vw;
          height: 100vh;
          top: 0px;
          left: 0px;
          z-index: 975;
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
  </style> 
