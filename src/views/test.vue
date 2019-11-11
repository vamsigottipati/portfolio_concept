<template>
  <div class="pageWrapper">
    <p class="hoverable" @click="$router.push('/')"
      style="position: fixed;top: 20px; right: 20px;transform: rotate(90deg);font-weight: 500;padding: 20px;z-index: 990;">
      Home</p>
    <p class="hoverable" @click="$router.push('works')"
      style="position: fixed;bottom: 30px; left: 10px;transform: rotate(-90deg);font-weight: 500;padding: 20px;z-index:990;">
      Contact</p>
    <div class="overlay"></div>
    <div class="contentWrapper" ref="contentWrapper"></div>
    <div></div>
  </div>
</template>


<style scoped>
  .contentWrapper {
    position: fixed;
    top: 10vh;
    height: 80vh;
    left: 2vw;
    width: 0vw;
    background: linear-gradient(45deg, #0575E6, #021B79  );
    z-index: 0;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
</style>


<script>

  export default {
    name: 'test',
    data() {
      return {}
    },
    mounted: function () {
      this.setWidth()
    },
    methods: {
      setWidth() {
        setTimeout(() => {
          this.$refs.contentWrapper.style.width = '48vw'
        }, 2300);
      },
    }
  }

</script>