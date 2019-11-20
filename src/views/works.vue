<template>
  <div class="page_body">
    <p class="hoverable contact_hoverable" @click="$router.push('works')"
      style="position: fixed;bottom: 3vh;font-weight: 500;padding: 0px;z-index:990;margin: 0px;writing-mode: vertical-rl;text-orientation: sideways;transform: rotate(180deg);">
      Contact</p>
    <svg class="menuIcon hoverable_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
    <div class="navCont">
      <!-- <svg class="upArrow hoverable_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="arrow-up">
            <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
            <path
              d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z" />
          </g>
        </g>
      </svg> -->
      <p class="hoverable_alt menuItems active_menuItem" style="text-align: center;align-self: center;">
        Hash 
      </p>
      <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;">
        SARC 
      </p>
      <p class="hoverable_alt menuItems " style="text-align: center;align-self: center;">
        Resume
        Builder </p>
      <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;">
        Resume
        Parser </p>
      <p class="hoverable_alt menuItems" style="text-align: center;align-self: center;">
        Smart Car
        Parking </p>
      <!-- <svg class="downArrow hoverable_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="arrow-downward">
            <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
            <path
              d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z" />
          </g>
        </g>
      </svg> -->
    </div>
    <div ref="mainBox" class="mainBox">
      <p ref="heading" class="heading">Hash</p>
      <p ref="description" class="description">Social Network designed and developed for the creative BITSIAN community
        with prime focus
        on ease of usage, security and collaboraion.</p>
    </div>
    <div
      style="position: fixed;left: 42vw;top: 0px;display: flex;flex-direction: row;width: 58vw;height: 100vh;z-index: 980;background: transparent;justify-content: center;">
      <img ref="mainImg" :src="this.hashImg" class="mainImg" alt="">
    </div>
    <div class="scrollOverlay"></div>
    <div ref="model" class="model"></div>
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
    height: 100vh;
  }

  .mainBox {
    position: fixed;
    top: 8vh;
    left: 2vw;
    height: 84vh;
    width: 40vw;
    background: linear-gradient(45deg, #0575E6, #021B79);
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    opacity: 0;
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
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
    color: #eee;
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
    height: 50vmin;
    align-self: center;
    width: auto;
    margin-left: -12vw;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    opacity: 0;
  }

  .upArrow {
    width: auto;
    height: 36px;
    fill: white;
    /* margin-top: auto; */
  }

  .downArrow {
    width: auto;
    height: 36px;
    fill: white;
    /* margin-bottom: auto; */
  }

  .navCont {
    position: absolute;
    z-index: 999;
    background: transparent;
    height: 100vh;
    width: auto;
    top: 0px;
    right: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .menuItems {
    color: grey;
    font-size: 22px;
    text-decoration: none;
    text-decoration-color: #fff;
  }

  .menuItems:first-of-type {
    margin-top: 10vh;
  }

  .menuItems:last-of-type {
    margin-bottom: 10vh;
  }
  .active_menuItem {
    font-size: 34px;
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
        isScrolling: 0,
        demo: 'asdasdasdasd',
        hashImg: require('../assets/hash.png'),
        sarcImg: require('../assets/sarc.png'),
        builderImg: require('../assets/builder.png'),
        parserImg: require('../assets/parser.png'),
        scpImg: require('../assets/hash.png'),
      }
    },
    mounted: function () {
      window.scrollTo(0, 0)
      this.setDefaults()
      setTimeout(() => {
        this.initTilt()
      }, 1000);
    },
    beforeDestroy: function () {
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
      }
    }

  }
</script>