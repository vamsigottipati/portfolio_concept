<template>
  <div ref="app" id="app">
    <div ref="outline" class="cursor-dot-outline"></div>
    <i ref="dot" class="cursor-dot fas fa-chevron-down"></i>
    <router-view/>
  </div>
</template>

<script>

// import { eventBus } from './eventBus.js';

export default {
  name: 'App',
    mounted: function() {
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

      init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      setupEventListeners: function() {
        var self = this;

        // Anchor hovering
        document.getElementsByClassName("hoverable").forEach(function(el) {
          el.addEventListener("mouseover", function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
            // el.style.fontSize = '26px'
            el.style.color = "black"
          });
          el.addEventListener("mouseout", function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
            // el.style.fontSize = '22px'
            el.style.color = "white"
          });
        });

        document.getElementsByClassName("clickable").forEach(function(el) {
          el.addEventListener("mousedown", function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener("mouseup", function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        document.addEventListener("mousemove", function(e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + "px";
          self.$dot.style.left = self.endX + "px";
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function() {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function() {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline: function() {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + "px";
        self.$outline.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function() {
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
          self.$outline.style.border = "2px solid #666";
        }
      },

      toggleCursorVisibility: function() {
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
  },
  methods: {
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Product+Sans:400,400i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900");

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

.hoverable {
  font-size: 30px;
}

.cursor-dot,
.cursor-dot-outline {
  pointer-events: none;
  position: absolute;
  z-index: 990;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
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
  color: #aaa;
}

.cursor-dot-outline {
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 2px solid #666;
}
</style>
