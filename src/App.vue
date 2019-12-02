<template>
  <div ref="app" id="app">
    <div ref="outline" class="cursor-dot-outline"></div>
    <i ref="dot" class="cursor-dot fas fa-chevron-down"></i>
    <div class="rv" ref="rv">
      <router-view />
    </div>
    <div class="loader_cont" ref="loader_cont" style="color: white; font-size: 3rem;transition: 0.5s;">
      <div class="loader">
        <div class="obj">
          <div class="rect"></div>
          <!-- <div class="shadow"></div> -->
        </div>
        <div class="obj">
          <div class="rect"></div>
          <!-- <div class="shadow"></div> -->
        </div>
        <div class="obj">
          <div class="rect"></div>
          <!-- <div class="shadow"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
      }
    },
    mounted: function () {
      // this.setLoader()
      this.checkMobile()
    },
    updated: function () {
      this.checkMobile()
    },
    methods: {
      checkMobile() {
        if (window.innerWidth < 480) {
          // this.setCursorStyle()
          this.$refs.outline.style.display = 'none';
          this.$refs.dot.style.display = 'none';
        } else {
          this.setCursorStyle()
          this.$refs.outline.style.display = 'block';
          this.$refs.dot.style.display = 'block';
        }
      },
      // setLoader() {
      //     this.$refs.loader_cont.style.opacity = '0'
      //     this.$refs.loader_cont.style.display = 'none'
      //     this.$refs.rv.style.opacity = '1'
      // },
      setCursorStyle() {
        var cursor = {
          delay: 8,
          _x: 0,
          _y: 0,
          endX: window.innerWidth / 2,
          endY: window.innerHeight / 2,
          cursorVisible: true,
          cursorEnlarged: false,
          $dot: document.querySelector(".cursor-dot"),
          $outline: document.querySelector(".cursor-dot-outline"),

          init: function () {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;

            this.setupEventListeners();
            this.animateDotOutline();
          },

          setupEventListeners: function () {
            var self = this;
            // Anchor hovering
            document.getElementsByClassName("hoverable").forEach(function (el) {
              el.addEventListener("mouseover", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
                el.style.color = "black"
                el.addEventListener("click", function () {
                  self.cursorEnlarged = false;
                  self.toggleCursorSize();
                });
              });
              el.addEventListener("mouseout", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
                el.style.color = "white"
              });
              el.addEventListener("click", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
              });
            });

            document.getElementsByClassName("hoverable_placeholders").forEach(function (el) {
              el.addEventListener("mouseover", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
                el.style.border = "1.5px solid black"
                el.style.background = "black"
                el.addEventListener("click", function () {
                  self.cursorEnlarged = false;
                  self.toggleCursorSize();
                });
              });
              el.addEventListener("mouseout", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
                el.style.border = "1.5px solid white"
                el.style.background = "transparent"
              });
              el.addEventListener("click", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
              });
            });

            document.getElementsByClassName("hoverable_svg").forEach(function (el) {
              el.addEventListener("mouseover", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
                el.style.fill = "black"
              });
              el.addEventListener("mouseout", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
                el.style.fill = "white"
              });
            });

            document.getElementsByClassName("hoverable_alt").forEach(function (el) {
              el.addEventListener("mouseover", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
                // el.style.color = "black"
                // el.style.textDecorationColor = 'gray';
                el.addEventListener("click", function () {
                  self.cursorEnlarged = false;
                  self.toggleCursorSize();
                });
              });
              el.addEventListener("mouseout", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
                // el.style.color = "white"
                el.style.textDecorationColor = '#fff';
              });
              el.addEventListener("click", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
              });
            });

            document.getElementsByClassName("clickable").forEach(function (el) {
              el.addEventListener("mousedown", function () {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
              });
              el.addEventListener("mouseup", function () {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
              });
            });

            document.addEventListener("mousemove", function (e) {
              // Show the cursor
              self.cursorVisible = true;
              self.toggleCursorVisibility();

              // Position the dot
              self.endX = e.pageX - window.pageXOffset;
              self.endY = e.pageY - window.pageYOffset;
              self.$dot.style.top = self.endY + "px";
              self.$dot.style.left = self.endX + "px";
            });

            // Hide/show cursor
            document.addEventListener("mouseenter", function () {
              self.cursorVisible = true;
              self.toggleCursorVisibility();
              self.$dot.style.opacity = 1;
              self.$outline.style.opacity = 1;
            });

            document.addEventListener("mouseleave", function () {
              self.cursorVisible = true;
              self.toggleCursorVisibility();
              self.$dot.style.opacity = 0;
              self.$outline.style.opacity = 0;
            });
          },

          animateDotOutline: function () {
            var self = this;

            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + "px";
            self.$outline.style.left = self._x + "px";

            requestAnimationFrame(this.animateDotOutline.bind(self));
          },

          toggleCursorSize: function () {
            var self = this;

            if (self.cursorEnlarged) {
              self.$dot.style.transform = "translate(-50%, -50%) scale(0)";
              self.$outline.style.border = "1px solid white";
              self.$outline.style.background = "white";
              self.$outline.style.transform = "translate(-50%, -50%) scale(2)";
            } else {
              self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
              self.$outline.style.background = "transparent";
              self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
              self.$outline.style.border = "2px solid #fff";
            }
          },

          toggleCursorVisibility: function () {
            var self = this;

            if (self.cursorVisible) {
              self.$dot.style.opacity = 1;
              self.$outline.style.opacity = 1;
            } else {
              self.$dot.style.opacity = 0;
              self.$outline.style.opacity = 0;
            }
          }
        };

        cursor.init();
      }
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Product+Sans:400,400i,700,700i");
  @import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900");
  @import url('https://fonts.googleapis.com/css?family=Esteban&display=swap');


  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: 'Product Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background: black;
    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
  }

  .focusIn {
    -webkit-animation: focusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: focusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  .hoverable {
    font-size: 30px;
  }

  .rv {
    transition: 0.5s;
    opacity: 1;
  }

  .loader_cont {
    display: none;
  }

  .cursor-dot,
  .cursor-dot-outline {
    pointer-events: none;
    position: fixed;
    z-index: 990;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    opacity: 1;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
      -webkit-transform 0.3s ease-in-out;
  }

  .cursor-dot {
    width: 12px;
    height: 12px;
    color: #fff;
  }

  .cursor-dot-outline {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: 2px solid #fff;
  }


  /* loader */

  .loader {
    position: fixed;
    top: calc(50vh - 67.5px);
    left: calc(50vw - 100px);
    height: 135px;
    width: 200px;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .obj {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .rect {
    width: 15px;
    height: 65px;
    border-radius: 0%;
    background: white;
    align-self: center;
  }

  .shadow {
    width: 40px;
    height: 15px;
    border-radius: 0%;
    background: #666;
    margin-right: 20px;
    margin-top: 20px;
    align-self: center;
  }

  .obj:first-of-type {
    -webkit-animation: moveUp 2s ease-in-out infinite alternate both;
    animation: moveUp 1s ease-in-out infinite alternate both;
    animation-delay: 0s;
  }

  .obj:nth-of-type(2) {
    -webkit-animation: moveUp 2s ease-in-out infinite alternate both;
    animation: moveUp 1s ease-in-out infinite alternate both;
    animation-delay: 0.3s;
  }

  .obj:last-of-type {
    -webkit-animation: moveUp 2s ease-in-out infinite alternate both;
    animation: moveUp 1s ease-in-out infinite alternate both;
    animation-delay: 0.6s;
  }

  .bg_shadow {
    -webkit-animation: bg_shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: bg_shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .scroll_placeholder {
    position: fixed;
    width: 40px;
    height: 50px;
    background: transparent;
    z-index: 999;
    bottom: 6vh;
    right: 3vw;
    border-radius: 1000000000px;
    border: 1.5px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .scroll_placeholder_icon {
    -webkit-animation: mover 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
    animation: mover 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
    color: white;
    align-self: center;
  }

  .scroll_placeholder_icon_rev {
    display: none;
    -webkit-animation: mover 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
    animation: mover 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
    color: white;
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    .hoverable {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 460px) {
    .scroll_placeholder {
      display: none;
    }
  }
  @-webkit-keyframes moveUp {
    0% {
      transform: scaleY(0.5)
    }

    50% {
      transform: scaleY(1.2)
    }

    100% {
      transform: scaleY(0.5)
    }
  }

  @keyframes moveUp {
    0% {
      transform: scaleY(0.5)
    }

    50% {
      transform: scaleY(1.2)
    }

    100% {
      transform: scaleY(0.5)
    }
  }

  @-webkit-keyframes focusIn {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes focusIn {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @-webkit-keyframes bg_shadow {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }

  @keyframes bg_shadow {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }

  @-webkit-keyframes mover {
    0% {
      transform: translateY(-5px)
    }

    50% {
      transform: translateY(5px)
    }

    100% {
      transform: translateY(-5px)
    }
  }

  @keyframes mover {
    0% {
      transform: translateY(-5px)
    }

    50% {
      transform: translateY(5px)
    }

    100% {
      transform: translateY(-5px)
    }
  }
</style>