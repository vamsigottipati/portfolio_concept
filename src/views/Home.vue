<template>
  <div>
    <div class="home" ref="home_cont" style="text-align: center;overflow-x: hidden;">
      <p class="hoverable" @click="$router.push('works')"
        style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
        Works</p>
        <p class="hoverable contact_hoverable" @click="$router.push('works')"
        style="position: fixed;bottom: 3vh;left: calc(4vw);font-weight: 500;padding: 0px;z-index:990;margin: 0px;writing-mode: vertical-rl;text-orientation: sideways;transform: rotate(180deg);">
        Contact</p>
      <div ref="main_box" class="main_box"></div>
      <div ref="overlay" class="overlay"></div>
      <div class="bg_shadow scroll_placeholder hoverable_placeholders">
        <i ref="scroll_placeholder_icon" class="fas fa-chevron-down scroll_placeholder_icon"
          style="font-size: 12px;"></i>
        <i ref="scroll_placeholder_icon_rev" class="fas fa-chevron-up scroll_placeholder_icon_rev"
          style="font-size: 12px;"></i>
      </div>
      <div ref="main_text_cont" class="main_text_cont">
        <p ref="main_text" class="main_text">Vamsi <br> Krishna</p>
      </div>
      <div ref="secondary_text_cont" class="secondary_text_cont">
        <p ref="secondary_text" class="secondary_text">Developer <br> <strong>Designer</strong> </p>
      </div>
      <div class="contact_overlay"></div>
      <div ref="teritiary_text_cont" class="teritiary_text_cont">
        <p ref="teritiary_text" class="teritiary_text">I’m a developer who focuses mainly on visual aspects of an
          application with
          profound knowledge in full stack web development, hybrid app development,
          UI/UX design and Intelligent System Design that includes a few concepts of
          machine learning, Deep learning, Natural Language Processing and
          Computer Vision</p>
      </div>
      <div ref="ending_text_cont" class="ending_text_cont">
        <p ref="ending_text" class="ending_text"> The focal point of my work is around improving Human Computer
          interaction in various sectors that mainly happens through the internet. I have done a few projects that
          utilises web technologies like Javascript, Nodejs, Vuejs, AngularJs, ReactJs, database systems like MongoDB,
          Sql, Tools like travis, Jest, Chai and Mocha, Machine Learning algorithms like KNN, SVM, Linear and Logistic
          Regressions, Deep Learning concepts like ANN, CNN, RNN, GAN, VAE.
        </p>
      </div>
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
        stage: 0,
        mouseX: 0,
        mouseY: 0,
        marLeft: 2,
        boxWidth: 48,
        lastScrollTop: 0,
        mainTextMarLeft: 0,
        secondaryTextMarLeft: 0,
        secondaryTextMarTop: 100,
      };
    },
    mounted: function () {
      this.x = window.innerWidth;
      this.y = window.innerHeight;
      this.posY = this.y
      this.posX = this.x
      this.setWidth()
      window.addEventListener('mousemove', this.mouseIsMoving);
      window.addEventListener("scroll", this.mouseIsScrolling);
      this.seTfontSize()
      document.body.scrollTop = 0
    },
    beforeDestroy: function () {
      window.removeEventListener('mousemove', this.mouseIsMoving);
      window.removeEventListener("scroll", this.mouseIsScrolling);
      var el = this.$refs.home_cont,
        elClone = el.cloneNode(true);

      el.parentNode.replaceChild(elClone, el);
    },
    components: {},
    methods: {
      seTfontSize() {
        if (this.x <= 460) {
          this.$refs.ending_text.innerText = `
          The focal point of my work is around improving Human Computer interaction in various sectors that mainly happens through the internet. I have done a few projects that utilises web technologies like Javascript, Nodejs, Vuejs, AngularJs, ReactJs, database systems like MongoDB, Sql, Tools like travis, Jest, Chai and Mocha, Machine Learning algorithms like KNN, SVM, Linear and Logistic Regressions, Deep Learning concepts like ANN, CNN, RNN, GAN, VAE.
          `
        }
      },
      setWidth() {
        setTimeout(() => {

          this.$refs.main_box.style.transition = '0.6s cubic-bezier(0.075, 0.82, 0.165, 1)'
          this.$refs.main_box.style.width = '48vw'
          setTimeout(() => {
            this.$refs.main_box.style.transition = '0s cubic-bezier(0.075, 0.82, 0.165, 1)'
          }, 1000)

          setTimeout(() => {
            this.$refs.main_text_cont.style.transition = '1s ease-in-out'
            this.$refs.main_text_cont.style.opacity = '1'
            setTimeout(() => {
              this.$refs.main_text_cont.style.transition = '0s ease-in-out'
            }, 100)
          }, 300);
        }, 300);

      },
      mouseIsMoving(event) {
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
        // this.$refs.main_box.style.top = (8/100*this.y) - ((this.mouseY - (this.y/2))/this.y * 15) + 'px'
        // this.$refs.main_box.style.left = (2/100*this.x) - ((this.mouseX - (this.x/2))/this.x * 15) + 'px'
      },
      mouseIsScrolling() {
        var widthRed = window.pageYOffset / this.y

        // box movement

        var addWidth = ((widthRed * 48) / 2.018)
        this.boxWidth = 48 + addWidth
        if (this.boxWidth >= 96) {
          // if(widthRed < 2.5) {
          this.$refs.main_box.style.width = '96vw'
          this.$refs.main_box.style.position = "absolute"
          this.$refs.main_box.style.top = "208vh"
          // } else {
          //   this.$refs.main_box.style.width = '96vw'
          //   this.$refs.main_box.style.position = "fixed"
          //   this.$refs.main_box.style.top = "-42vh"
          // }
        } else {
          this.$refs.main_box.style.position = "fixed"
          this.$refs.main_box.style.top = "8vh"
          this.$refs.main_box.style.width = 48 + addWidth + 'vw'
        }

        // text movement

        var addLeft = (((widthRed * 100) / 1.018))
        this.mainTextMarLeft = addLeft
        if (this.mainTextMarLeft >= 100) {
          this.$refs.main_text_cont.style.left = '100vw'
        } else {
          this.$refs.main_text_cont.style.left = "" + this.mainTextMarLeft + 'vw'
        }

        // sencondary text

        if (((widthRed * 100) / 0.75) >= 95) {
          this.secondaryTextMarTop = (145 - ((widthRed * 100) / 0.75)) * 1.5
          // if(this.secondaryTextMarTop <= 0) {
          //   this.secondaryTextMarTop = 0
          //   this.secondaryTextMarLeft = ((145 - ((widthRed * 100) / 0.65)) * 1.1)
          //   this.$refs.secondary_text_cont.style.left = ((145 - ((widthRed * 100) / 0.75)) * 0.65) + 'vw'
          // } else {
          this.$refs.secondary_text_cont.style.top = (145 - ((widthRed * 100) / 0.75)) * 1.5 + 'vh'
          // }
        } else {
          this.secondaryTextMarTop = 100
          this.$refs.secondary_text_cont.style.top = "100vh"
        }


        // teritiary text

        if ((widthRed > 1.5) && (widthRed < 2.3)) {
          this.$refs.teritiary_text_cont.style.opacity = '1'
        } else {
          this.$refs.teritiary_text_cont.style.opacity = '0'
        }

        // ending text

        if ((widthRed > 2.75)) {
          this.$refs.ending_text_cont.style.opacity = '1'
        } else {
          this.$refs.ending_text_cont.style.opacity = '0'
        }

        // scroll placeholder reverse

        if ((widthRed > 2.9)) {
          this.$refs.scroll_placeholder_icon.style.display = "none"
          this.$refs.scroll_placeholder_icon_rev.style.display = "block"
        } else {
          this.$refs.scroll_placeholder_icon.style.display = "block"
          this.$refs.scroll_placeholder_icon_rev.style.display = "none"
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
    width: 0vw;
    left: 2vw;
    /* background: linear-gradient(45deg, #CB356B, #BD3F32); */
    background: linear-gradient(45deg, #0575E6, #021B79);
    z-index: 900;
  }

  .ending_text_cont {
    position: fixed;
    padding: 0px;
    margin: 0px;
    z-index: 901;
    top: 0vh;
    left: 0vw;
    height: 100vh;
    width: 100vw;
    display: flex;
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
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
    opacity: 0;
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
    z-index: 90;
    background: transparent;
    top: 0px;
    left: 0px;
    height: 410vh;
    width: 100vw;
  }

  .contact_overlay {
    position: absolute;
    width: calc(35px + 4vw);
    height: 180px;
    /* background: linear-gradient(45deg, #CB356B, #BD3F32); */
    background: linear-gradient(45deg, #0575E6, #021B79);
    z-index: 980;
    left: calc(2vw);
    top: calc(410vh - 180px);
  }

  @media screen and (max-width: 768px) {
    .teritiary_text {
      font-size: 1.3rem;
    }

    .ending_text {
      font-size: 1.3rem;
    }

    .secondary_text {
      font-size: 4.5rem;
    }

    .main_text {
      font-size: 4.5rem;
    }

    .contact_overlay {
      width: calc(25px + 4vw);
      height: 160px;
      top: calc(410vh - 160px);
    }
  }

  @media screen and (max-width: 460px) {
    .teritiary_text {
      font-size: 1.3rem;
    }

    .ending_text {
      font-size: 1.3rem;
      padding-top: 0vh;
    }

    .secondary_text {
      font-size: 2.8rem;
      padding-left: 10px;
    }

    .main_text {
      font-size: 3.2rem;
    }

    .hoverable {
      font-size: 20px;
    }

    .contact_overlay {
      width: calc(15px + 4vw);
      height: 140px;
      top: calc(410vh - 140px);
    }
  }
</style>