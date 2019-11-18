<template>
  <div class="page_body">
    <p class="hoverable" @click="$router.push('/')"
      style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
      Contact</p>
    <div class="scrollOverlay"></div>
  </div>
</template>

<style scoped>
  * {
    cursor: none !important;
  }

  .scrollOverlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 500vh;
  }

  @media screen and (max-width: 768px) {}

  @media screen and (max-width: 460px) {
    .hoverable {
      font-size: 20px;
    }
  }
</style>

<script>


  export default {
    name: 'works',
    data() {
      return {
        status: true,
        scrollVal: 0,
        isScrolling: 0,
        demo: 'asdasdasdasd'
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
      window.addEventListener('scroll', this.setScrolling, true)
    },
    beforeDestroy: function () {
      window.removeEventListener('scroll', this.setScrolling, true)
    },
    methods: {
      setScrolling() {
        this.throttle(this.onscroll, 100, [{leading: true}, {trailing: true}])
      },
      throttle (func, wait, options) {
        var timeout, context, args, result;
        var previous = 0;
        if (!options) options = {};

        var later = function () {
          previous = options.leading === false ? 0 : Date.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        };

        var throttled = function () {
          var now = Date.now();
          if (!previous && options.leading === false) previous = now;
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };

        throttled.cancel = function () {
          clearTimeout(timeout);
          previous = 0;
          timeout = context = args = null;
        };

        return throttled;
      },
      onscroll () {
        alert('scrolling')
      }

    }

  }
</script>