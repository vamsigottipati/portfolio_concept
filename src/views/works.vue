<template>
  <div class="page_body">
    <p class="hoverable contact_hoverable" @click="$router.push('works')"
      style="position: fixed;bottom: 3vh;font-weight: 500;padding: 0px;z-index:990;margin: 0px;writing-mode: vertical-rl;text-orientation: sideways;transform: rotate(180deg);">
      Contact</p>
    
    <!-- icons -->

    <svg class="menuIcon hoverable_svg" ref="openIcon" @click="openModel" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="menu-2">
          <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
          <circle cx="4" cy="12" r="1" />
          <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
          <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
          <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
        </g>
      </g>
    </svg>
    <svg class="menuIcon hoverable_svg noDisplay" @click="closeModel" ref="closeIcon" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="close">
          <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
          <path
            d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
        </g>
      </g>
    </svg>

    <!-- main content -->

    <div class="row">
      <div ref="mainBox" class="mainBox">
        <p ref="heading" class="heading">{{this.textArr[this.currentSlideNum]}}</p>
        <p ref="description" class="description">{{this.descriptionArr[this.currentSlideNum]}}</p>
      </div>
      <img ref="mainImg" :src="this.imgArr[this.currentSlideNum]" class="mainImg" alt="">
    </div>

    <!-- navcontent -->

    <div class="navCont" ref="navCont">
      <svg class="upArrow hoverable_svg" @click="scrollToPos(currentSlideNum-1)" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="arrow-up">
            <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
            <path
              d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z" />
          </g>
        </g>
      </svg>
      <div style="height: 70vh;display: flex; flex-direction: column;justify-content: center;align-items: center;">
        <p class="hoverable_alt menuItems active_menuItem" @click="scrollToPos(0)"
          style="text-align: center;align-self: center;">
          Hash
        </p>
        <p class="hoverable_alt menuItems" @click="scrollToPos(1)" style="text-align: center;align-self: center;">
          SARC
        </p>
        <p class="hoverable_alt menuItems " @click="scrollToPos(2)" style="text-align: center;align-self: center;">
          Resume
          Builder </p>
        <p class="hoverable_alt menuItems" @click="scrollToPos(3)" style="text-align: center;align-self: center;">
          Resume
          Parser </p>
        <p class="hoverable_alt menuItems" @click="scrollToPos(4)" style="text-align: center;align-self: center;">
          Smart Car
          Parking </p>
      </div>
      <svg class="downArrow hoverable_svg" @click="scrollToPos(currentSlideNum+1)" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="arrow-downward">
            <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
            <path
              d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z" />
          </g>
        </g>
      </svg>
    </div>

    <div class="scrollOverlay"></div>
    <div ref="model" class="model">
      <div class="modelBox"></div>
      <p class="hoverable modelBoxItem">Home</p>
      <p class="hoverable modelBoxItem" style="text-decoration-line: line-through;text-decoration-color: gray;">Works
      </p>
      <p class="hoverable modelBoxItem">Contact</p>
    </div>
  </div>
</template>

<style scoped>
  * {
    cursor: none !important;
  }

  .noDisplay {
    display: none;
  }

  .row {
    display: flex;
    flex-direction: row;
    z-index: 99;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    background: transparent;
  }

  .model {
    position: fixed;
    top: 0px;
    bottom: 0px;
    background: transparent;
    width: 100vw;
    height: 100vh;
    z-index: 970;
    display: none;
  }

  .modelBox {
    position: fixed;
    width: 50vw;
    top: 20vh;
    left: 25vw;
    height: 60vh;
    background: linear-gradient(45deg, #0575E6, #021B79);
    z-index: 976;
  }

  .modelBoxItem {
    font-size: 50px;
    position: fixed;
    top: 10vh;
    left: 40vw;
  }

  .scrollOverlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
  }

  .mainBox {
    margin-left: 2vw;
    height: 84vh;
    width: 40vw;
    background: linear-gradient(45deg, #0575E6, #021B79);
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    opacity: 0;
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    align-self: center;
  }

  .heading {
    font-size: 55px;
    color: white;
    text-align: left;
    padding: 2vh 3vw 2vh 3vw;
    margin: 0px;
    font-weight: 500;
    opacity: 0;
    transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .description {
    font-size: 24px;
    color: #ddd;
    text-align: left;
    padding: 2vh 3vw 2vh 3vw;
    margin: 0px;
    opacity: 0;
    transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .contact_hoverable {
    left: calc(4vw);
  }

  .menuIcon {
    position: fixed;
    top: calc(8vh - 18px);
    left: calc(4vw + 12px);
    width: auto;
    height: 36px;
    z-index: 999;
    fill: white;
  }

  .mainImg {
    height: auto;
    align-self: center;
    width: 15vw;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    opacity: 0;
    margin-left: 9.5vw;
    /* transform: translateX(-7.5vw); */
  }

  .upArrow {
    width: auto;
    height: 36px;
    fill: white;
    z-index: 999;
  }

  .downArrow {
    width: auto;
    height: 36px;
    fill: white;
    z-index: 999;
  }

  .navCont {
    background: transparent;
    position: fixed;
    top: 0px;
    right: 0vw;
    height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-left: auto;
    z-index: 999;
  }

  .menuItems {
    color: grey;
    font-size: 22px;
    text-decoration: none;
    text-decoration-color: #fff;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .menuItems:first-of-type {
    margin-top: 10vh;
  }

  .menuItems:last-of-type {
    margin-bottom: 10vh;
  }

  .active_menuItem {
    font-size: 34px;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-top: 40px;
    margin-bottom: 40px;
    text-decoration-line: line-through;
    /* text-decoration-color: #fff; */
    text-decoration-style: solid;
    color: gray;
  }

  @media screen and (max-width: 768px) {}

  @media screen and (max-width: 460px) {
    .hoverable {
      font-size: 20px;
    }
  }
</style>

<script>

  import VanillaTilt from 'vanilla-tilt'

  export default {
    name: 'works',
    data() {
      return {
        status: true,
        scrollVal: 0,
        demo: 'asdasdasdasd',
        hashImg: require('../assets/hash.png'),
        sarcImg: require('../assets/sarc.png'),
        builderImg: require('../assets/builder.png'),
        parserImg: require('../assets/parser.png'),
        scpImg: require('../assets/hash.png'),
        descriptionArr: [
          'Social Network designed and developed for the creative BITSIAN community with prime focus on ease of usage, security and collaboraion.',
          'A complex blog built to bridge the gap between BITSIAN Alumni and students with multiple features including a merchendise portal and a chat section.',
          'A visual Resume Builder with high level customisation, a few pre built templates for a starup InfiniteSearches',
          'Resume analysing tool that reads, segments and ranks a resume based on parameters set',
          'Smart car parking system that registers and acknowledges when, where, how and who enters the UST Global campus. ', /* Depends mostly on detection and tracking of cars and their number plates. */
        ],
        textArr: [
          `Hash`,
          `SARC`,
          `Resume  Builder`,
          `Resume Parser`,
          `Smart Car Parking`
        ],
        imgArr: [require('../assets/hash.png'), require('../assets/sarc.png'), require('../assets/builder.png'), require('../assets/parser.png'), require('../assets/hash.png')],
        currentSlideNum: 0
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
      this.setDefaults()
      setTimeout(() => {
        this.initTilt()
      }, 1000);
      // window.addEventListener('scroll', this.isScrolling)
    },
    beforeDestroy: function () {
      // window.removeEventListener('scroll', this.isScrolling)
    },
    methods: {
      setScrolling() {
        this.throttle(this.onscroll, 100, [{ leading: true }, { trailing: true }])
      },
      initTilt() {
        VanillaTilt.init(this.$refs.mainImg, {
          "full-page-listening": true,
          "max-glare": 1,
          max: 30,
          speed: 100,
        });
      },
      setDefaults() {
        setTimeout(() => {
          this.$refs.mainImg.style.opacity = '1'
          this.$refs.heading.style.opacity = '1'
          this.$refs.description.style.opacity = '1'
        }, 600);
        this.$refs.mainBox.style.opacity = '1'
      },
      scrollToPos(e) {
        // window.scrollTo(0, window.innerHeight*e + 1)
        if (e < 0) {
          this.currentSlideNum = 0
        } else {
          if (e > 4) {
            this.currentSlideNum = 4
          } else {
            this.currentSlideNum = e
          }
        }
        console.log(this.$refs.navCont.children[1].children)
        var counter = 0
        this.$refs.navCont.children[1].children.forEach(el => {

          if (el.classList.contains("active_menuItem")) {
            if (counter != this.currentSlideNum) {
              el.classList.remove('active_menuItem')
            }
          } else {
            if (counter == this.currentSlideNum) {
              el.classList.add('active_menuItem')
            }
          }
          counter = counter + 1
        })
      },
      openModel() {
        this.$refs.openIcon.style.display = 'none'
        this.$refs.mainImg.style.display = 'none'
        this.$refs.navCont.style.display = 'none'
        this.$refs.mainBox.style.display = 'none'
        this.$refs.model.style.display = 'flex'
        setTimeout(() => {
          this.$refs.closeIcon.style.display = 'block'
        }, 200);
      },
      closeModel() {
        this.$refs.closeIcon.style.display = 'none'
        this.$refs.mainImg.style.display = 'block'
        this.$refs.navCont.style.display = 'flex'
        this.$refs.mainBox.style.display = 'flex'
        this.$refs.model.style.display = 'none'
        setTimeout(() => {
          this.$refs.openIcon.style.display = 'block'
        }, 200);
      },
      isScrolling() {
        var counter = 0
        if (window.pageYOffset < 1 * window.innerHeight && window.pageYOffset >= 0) {
          this.currentSlideNum = 0
          counter = 0
          this.$refs.navCont.children.forEach(el => {

            if (el.classList.contains("active_menuItem")) {
              if (counter == this.currentSlideNum) {
                console.log('yoyoyoyo')
              } else {
                el.classList.remove('active_menuItem')
              }
            } else {
              if (counter == this.currentSlideNum) {
                el.classList.add('active_menuItem')
              }
            }
            counter = counter + 1
          })
        } else {
          if (window.pageYOffset < 2 * window.innerHeight && window.pageYOffset >= 1 * window.innerHeight) {
            this.currentSlideNum = 1
            counter = 0
            this.$refs.navCont.children.forEach(el => {

              if (el.classList.contains("active_menuItem")) {
                if (counter == this.currentSlideNum) {
                  console.log('yoyoyoyo')
                } else {
                  el.classList.remove('active_menuItem')
                }
              } else {
                if (counter == this.currentSlideNum) {
                  el.classList.add('active_menuItem')
                }
              }
              counter = counter + 1
            })
          } else {
            if (window.pageYOffset < 3 * window.innerHeight && window.pageYOffset >= 2 * window.innerHeight) {
              this.currentSlideNum = 2
              counter = 0
              this.$refs.navCont.children.forEach(el => {

                if (el.classList.contains("active_menuItem")) {
                  if (counter == this.currentSlideNum) {
                    console.log('yoyoyoyo')
                  } else {
                    el.classList.remove('active_menuItem')
                  }
                } else {
                  if (counter == this.currentSlideNum) {
                    el.classList.add('active_menuItem')
                  }
                }
                counter = counter + 1
              })
            } else {
              if (window.pageYOffset < 4 * window.innerHeight && window.pageYOffset >= 3 * window.innerHeight) {
                this.currentSlideNum = 3
                counter = 0
                this.$refs.navCont.children.forEach(el => {

                  if (el.classList.contains("active_menuItem")) {
                    if (counter == this.currentSlideNum) {
                      console.log('yoyoyoyo')
                    } else {
                      el.classList.remove('active_menuItem')
                    }
                  } else {
                    if (counter == this.currentSlideNum) {
                      el.classList.add('active_menuItem')
                    }
                  }
                  counter = counter + 1
                })
              } else {
                if (window.pageYOffset < 5 * window.innerHeight && window.pageYOffset >= 4 * window.innerHeight) {
                  this.currentSlideNum = 4
                  counter = 0
                  this.$refs.navCont.children.forEach(el => {

                    if (el.classList.contains("active_menuItem")) {
                      if (counter == this.currentSlideNum) {
                        console.log('yoyoyoyo')
                      } else {
                        el.classList.remove('active_menuItem')
                      }
                    } else {
                      if (counter == this.currentSlideNum) {
                        el.classList.add('active_menuItem')
                      }
                    }
                    counter = counter + 1
                  })
                } else {
                  if (window.pageYOffset <= 6 * window.innerHeight && window.pageYOffset >= 5 * window.innerHeight) {
                    console.log('end')
                  }
                }
              }
            }
          }
        }
      }
    }

  }
</script>