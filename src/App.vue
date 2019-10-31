<template>
  <div id="app">
    <div class="cursor-dot-outline"></div>
    <div class="cursor-dot"></div>
    <router-view/>
  </div>
</template>

<script>
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
        document.querySelectorAll("a").forEach(function(el) {
          el.addEventListener("mouseover", function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener("mouseout", function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        // Click events
        document.addEventListener("mousedown", function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener("mouseup", function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
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
          self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
          self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
          self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
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
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: black;
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.cursor-dot,
.cursor-dot-outline {
  pointer-events: none;
  position: absolute;
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
  width: 6px;
  height: 6px;
  background-color: #aaa;
}

.cursor-dot-outline {
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 2px solid #666;
}
</style>
