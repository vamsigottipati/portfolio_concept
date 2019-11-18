<template>
        <div class="pageWrapper">
          <p class="hoverable" @click="$router.push('/')"
            style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 999;">
            Contact</p>
          <!-- <p class="hoverable" @click="$router.push('works')"
                  style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:999;">
                  Contact</p> -->
          <i class="fas fa-bars hoverable menu_icon" ref="menu_icon" @click="this.showModel"></i>
          <div ref="overlay" class="overlay"></div>
          <div class="sideBox" ref="sideBox"></div>
          <!-- <div ref="ref_dots" class="ref_dots">
                  <div class="hoverable_placeholders_bl_alt">1</div>
                  <div class="hoverable_placeholders_bl">2</div>
                  <div class="hoverable_placeholders_bl">3</div>
                  <div class="hoverable_placeholders_bl">4</div>
                  <div class="hoverable_placeholders_bl">5</div>
              </div> -->
          <div ref="sideboxTextWrapper" class="sideboxTextWrapper">
            <p class="heading " ref="heading">{{this.curText}}</p>
            <p class="description" ref="description">{{this.curDescription}}</p>
          </div>
          <div class="model" ref="model">
            <i class="fas fa-times hoverable menu_icon " @click="this.closeModel"></i>
            <div
              style="display: flex; flex-direction: column;justify-content: center;align-content: center;width: 100vw;height: 80vh;margin-top: 10vh;margin-bottom: 10vh;overflow-y: scroll;">
              <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;" @click="menuItemClick(0)">Hash
              </p>
              <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;" @click="menuItemClick(1)">SARC
              </p>
              <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;" @click="menuItemClick(2)">
                Resume
                Builder</p>
              <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;" @click="menuItemClick(3)">
                Resume
                Parser</p>
              <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;" @click="menuItemClick(4)">
                Smart Car
                Parking</p>
            </div>
      
          </div>
          <div ref="ending_text_cont" class="ending_text_cont">
            <p ref="ending_text" class="ending_text">
              Hey !!! <br> <br> You just got to the end. Just the page, not projects. You can find all my projects in my
              github <a href="https://github.com/vamsigottipati" class="link hoverable">@vamsigottipati</a> <br> <br>
              You can find my resume <a class="link hoverable"
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-vamsi.appspot.com/o/resume-vamsi.pdf?alt=media&token=eadae94d-ec59-4516-b187-f69281233c173">here</a>
            </p>
          </div>
          <img :src="this.hashImg" ref="mainImg" class="mainImg" alt="">
          <div ref="scroll_placeholder" class="bg_shadow scroll_placeholder hoverable_placeholders">
            <i ref="scroll_placeholder_icon" class="fas fa-chevron-down scroll_placeholder_icon" style="font-size: 12px;"></i>
            <i ref="scroll_placeholder_icon_rev" class="fas fa-chevron-up scroll_placeholder_icon_rev"
              style="font-size: 12px;"></i>
          </div>
        </div>
      </template>
      
      
      <style scoped>
        .ref_dots {
          position: fixed;
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 30px;
          top: 0vh;
          left: 35px;
          z-index: 997;
          justify-content: center;
        }
      
        .ref_dots>div {
          background: transparent;
          transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      
        .hoverable_placeholders_bl {
          height: 20px;
          width: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
          align-self: center;
          color: gray;
        }
      
        .hoverable_placeholders_bl_alt {
          padding: 15px;
          font-size: 40px;
          margin-top: 25px;
          margin-bottom: 25px;
          color: white;
          align-self: center;
        }
      
        .link {
          color: white;
        }
      
        .sideBox {
          position: fixed;
          top: 10vh;
          height: 80vh;
          right: 2vw;
          width: 0vw;
          background: linear-gradient(45deg, #0575E6, #021B79);
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
          color: #ccc;
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
          width: 100vw;
          height: 10500vh;
          top: 0px;
          left: 0px;
          z-index: 1;
        }
      
        .model {
          position: fixed;
          width: 100vw;
          height: 100vh;
          background: transparent;
          top: 0px;
          left: 0px;
          z-index: 998;
          display: none;
        }
      
        .menuItems {
          color: grey;
          font-size: 30px;
        }
      
        .ending_text_cont {
          position: fixed;
          padding: 0px;
          margin: 0px;
          z-index: 990;
          top: 0vh;
          left: 0vw;
          height: 100vh;
          width: 100vw;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          opacity: 0;
          transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      
        .ending_text {
          padding: 18vw;
          padding-top: 0px;
          padding-bottom: 0px;
          margin: auto;
          text-align: left;
          font-weight: 900;
          align-self: center;
          color: white;
          font-size: 2rem;
          transition-timing-function: ease-in-out;
          line-height: 1.35em;
        }
      
        .menu_icon {
          position: fixed;
          top: calc(10vh - 15px);
          left: 45px;
          font-size: 20px;
          z-index: 998;
        }
      
        @media screen and (max-width: 460px) {
          .menuItems {
            font-size: 22px;
          }
      
          .heading {
            font-size: 35px;
          }
      
          .description {
            font-size: 16px;
            padding-right: 5vw;
          }
      
          .ending_text {
            font-size: 1.3rem;
            padding-top: 0vh;
          }
      
          .hoverable {
            font-size: 20px;
          }
      
          .menu_icon {
            top: calc(10vh - 15px);
            left: 40px;
          }
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
              curText: 'Hash',
              curDescription: 'Social Network designed and developed for the creative BITSIAN community with prime focus on ease of usage, security and collaboraion.',
              imgArr: [require('../assets/hash.png'), require('../assets/sarc.png'), require('../assets/builder.png'), require('../assets/parser.png'), require('../assets/hash.png')],
              textArr: [
                `Hash`,
                `SARC`,
                `Resume <br> Builder`,
                `Resume <br> Parser`,
                `Smart Car <br> Parking`
              ],
              descriptionArr: [
                'Social Network designed and developed for the creative BITSIAN community with prime focus on ease of usage, security and collaboraion.',
                'A complex blog built to bridge the gap between BITSIAN Alumni and students with multiple features including a merchendise portal and a chat section.',
                'A visual Resume Builder with high level customisation, a few pre built templates for a starup InfiniteSearches',
                'Resume analysing tool that reads, segments and ranks a resume based on parameters set',
                'Smart car parking system that registers and acknowledges when, where, how and who enters the UST Global campus. ', /* Depends mostly on detection and tracking of cars and their number plates. */
              ],
              scrollStop: function (callback) {
                if (!callback || typeof callback !== 'function') return;
                var isScrolling;
                window.addEventListener('scroll', function () {
                  window.clearTimeout(isScrolling);
                  isScrolling = setTimeout(function () {
                    callback()
                  }, 36);
                }, false)
              },
              moDispRefs: ['mainImg', 'scroll_placeholder', 'sideboxTextWrapper', 'menu_icon', 'sideBox'],
              showItems: false,
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
            afterScroll() {
              var vm = this
              this.scrollStop(function () {
                if ((window.pageYOffset - vm.prevPageOff) > 0) {
                  // scrolling down
                  if (!vm.showItems) {
                    if (vm.curImg < 4) {
                      vm.curImg = vm.curImg + 1
                      // vm.$refs.overlay.style.height = vm.$refs.overlay.clientHeight + (window.innerHeight/100*5) + 'px'
                      vm.changeData(vm.curImg)
                    } else {
                      vm.curImg = 5
                      // show that this is end
                    }
                  }
                } else {
                  // scrolling up
                  if (!vm.showItems) {
                    if (vm.curImg > 0) {
                      vm.curImg = vm.curImg - 1
                      vm.changeData(vm.curImg)
                      // vm.$refs.overlay.style.height = vm.$refs.overlay.clientHeight - (window.innerHeight/100*5) + 'px'
                      // vm.$refs.overlay.scrollTop = vm.$refs.overlay.scrollHeight
      
                    } else {
                      vm.curImg = 0
                      // vm.$refs.overlay.style.height = '250vh'
                      //  show this is top
                      // alert('this is    top')
                    }
                  }
                }
                vm.prevPageOff = window.pageYOffset
                vm.setBreakPoints()
              })
            },
            setWidth() {
              setTimeout(() => {
                this.$refs.sideBox.style.width = '40vw'
      
                setTimeout(() => {
                  this.$refs.mainImg.style.opacity = '1'
                  this.$refs.mainImg.style.top = (window.innerHeight - this.$refs.mainImg.clientHeight) / 2 + 'px'
                }, 700);
                setTimeout(() => {
                  this.$refs.heading.style.opacity = '1'
                  this.$refs.description.style.opacity = '1'
                }, 700);
              }, 500);
            },
            setBreakPoints() {
              var vm = this
              if (!vm.showItems) {
                if (vm.curImg <= 3) {
                  vm.$refs.scroll_placeholder_icon.style.display = "block"
                  vm.$refs.scroll_placeholder_icon_rev.style.display = "none"
                } else {
                  vm.$refs.scroll_placeholder_icon.style.display = "none"
                  vm.$refs.scroll_placeholder_icon_rev.style.display = "block"
                }
                if (vm.curImg <= 4) {
                  vm.$refs.mainImg.style.display = 'block'
                  vm.$refs.heading.style.display = 'block'
                  vm.$refs.description.style.display = 'block'
                  vm.$refs.sideBox.style.width = '40vw'
                  vm.$refs.ending_text_cont.style.display = "none"
                  vm.$refs.ending_text_cont.style.opacity = '0'
                  vm.$refs.ref_dots.style.opacity = '1'
      
                } else {
                  vm.$refs.mainImg.style.display = 'none'
                  vm.$refs.heading.style.display = 'none'
                  vm.$refs.description.style.display = 'none'
                  vm.$refs.sideBox.style.width = '96vw'
                  vm.$refs.ref_dots.style.opacity = '0'
                  vm.$refs.ending_text_cont.style.display = "flex"
                  vm.$refs.ending_text_cont.style.opacity = '1'
                }
              }
            },
            changeData(e) {
              // this.$refs.heading.style.transform = "translateX(50px)"
              if (!this.showItems) {
                this.$refs.heading.style.transition = "0.3s ease-in-out"
                this.$refs.heading.style.opacity = "0"
                this.$refs.description.style.transition = "0.3s ease-in-out"
                this.$refs.description.style.opacity = "0"
                this.$refs.mainImg.style.transition = "0.3s ease-in-out"
                this.$refs.mainImg.style.opacity = "0"
                setTimeout(() => {
                  // this.$refs.heading.style.transform = "translateX(-50px)"
                  this.$refs.heading.style.opacity = "1"
                  this.$refs.heading.innerHTML = this.textArr[e]
                  this.$refs.heading.style.transition = "0s ease-in-out"
                  this.$refs.description.style.opacity = "1"
                  this.$refs.description.innerHTML = this.descriptionArr[e]
                  this.$refs.description.style.transition = "0s ease-in-out"
                  this.$refs.mainImg.style.opacity = "1"
                  this.$refs.mainImg.src = this.imgArr[e]
                  this.$refs.mainImg.style.transition = "0s ease-in-out"
                }, 300);
              }
            },
            initTilt() {
              VanillaTilt.init(this.$refs.mainImg, {
                "full-page-listening": true,
                "max-glare": 1,
                max: 30,
                speed: 100,
              });
            },
            openWork() {
              alert('Working on it ..................')
            },
            showModel() {
              this.showItems = true
              this.moDispRefs.forEach(el => {
                this.$refs[el].style.display = 'none'
              });
              this.$refs.model.style.display = 'flex'
              this.$refs.ending_text_cont.style.display = "none"
              this.$refs.ending_text_cont.style.opacity = '0'
              this.$refs.ref_dots.style.opacity = '0'
            },
            closeModel() {
              this.showItems = false
              this.moDispRefs.forEach(el => {
                this.$refs[el].style.display = 'flex'
              });
              if (this.curImg > 4) {
                this.$refs.ending_text_cont.style.display = "flex"
                this.$refs.ending_text_cont.style.opacity = '1'
              }
              this.$refs.model.style.display = 'none'
              this.$refs.ref_dots.style.opacity = '1'
      
            },
            menuItemClick(e) {
              this.closeModel()
              this.curImg = e
              this.changeData(this.curImg)
              this.setBreakPoints()
            }
          }
        }
      
      </script>