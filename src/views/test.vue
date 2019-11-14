

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
              <p class="work 1" ref="1">Hash</p>
              <p class="work 2" ref="2">SARC</p>
              <p class="work 3" ref="3">Resume <br> Builder</p>
              <p class="work 4" ref="4">Resume <br> Parser</p>
              <p class="work 5" ref="5">Smart <br> Car <br> Parking</p>
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
                  counter : 0,
              };
          },
          mounted: function () {
              this.initTilt()
              window.addEventListener("scroll", this.mouseIsScrolling);
              // window.addEventListener('mousemove', this.setTextShadowEvent)
          },
          updated: function() {
              window.addEventListener("scroll", this.mouseIsScrolling);
          },
          methods: {
              initTilt () {
                  VanillaTilt.init(this.$refs.main_circle, {
                      "full-page-listening": true,
                      "max-glare": 1,
                      max: 10,
                      speed: 100,
                  });
              },
              destroyTilt () {
                  this.$refs.main_circle.vanillaTilt.destroy()
              },
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
                  console.log((window.pageYOffset/ this.y))
                  this.$refs.works_cont.style.left = -leftThresh+'vw'
                  // if((window.pageYOffset / this.y) > 0.4) {
                  //     try {
                  //         this.destroyTilt()
                  //     }
                  //     catch (err) {
                  //         console.log('no tilt')
                  //     }
                  //     this.$refs.main_circle.style.transition = '0.2s ease-in-out'
                  //     this.$refs.main_circle.style.opacity = '0'
                  //     this.$refs.main_circle.style.transition = '0s ease-in-out'
                  // } else {
                  //     this.$refs.main_circle.style.transition = '0.3s ease-in-out'
                  //     this.$refs.main_circle.style.opacity = '1'
                  //     this.$refs.main_circle.style.transition = '0s ease-in-out'
                  //     this.initTilt()
                  // }
                  var scrollPer = window.pageYOffset / this.y
                  if(scrollPer <= 0.42) {
                      this.$refs.main_circle.src = this.hashImg
                  } else {
                      if(scrollPer <= 1 && scrollPer > 0.48) {
                          this.$refs.main_circle.src = this.sarcImg
                      } else {
                          if(scrollPer <= 1.56 && scrollPer > 1) {
                              this.$refs.main_circle.src = this.builderImg
                          } else {
                              if(scrollPer > 2 && scrollPer <= 2.4) {
                                  this.$refs.main_circle.src = this.parserImg
                              } else {
                                  if(scrollPer > 2.4) {
                                      this.$refs.main_circle.src = this.hashImg
                                  }
                              }
                          }
                      }
                  }
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
  </style> 




