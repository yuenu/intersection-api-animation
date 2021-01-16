<template>
  <div class="home">
    <img class="home__bg" alt="home-bg" src="../assets/header.jpg" />
    <section class="header">
      <div class="header__box">
        <h1 v-scrollanimation class="header__title">
          休日に最高にChillできるMix
        </h1>
        <h3 v-scrollanimation class="header__date">01/16/21</h3>
        <p v-scrollanimation class="header__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          corporis velit explicabo cupiditate culpa tempora tenetur enim eum
          consequatur ex optio nam quasi atque quibusdam sint, eveniet modi
          consequuntur aliquid.
        </p>
      </div>
    </section>
    <Description />
    <Images />
  </div>
</template>

<script>
import Description from "@/components/Description.vue";
import Images from "@/components/Images.vue";

export default {
  name: "Home",
  components: {
    Description,
    Images
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  font-family: sans-serif;
  overflow: hidden;

  &__bg {
    position: absolute;
    z-index: -1;
    object-fit: cover;
    height: 100vh;
    width: 100%;
  }
}

.header {
  position: relative;
  width: 100%;
  min-height: 100vh;

  &__box {
    position: absolute;
    bottom: 0;
    height: 250px;
    width: 100%;
    color: #fbfcfd;
    padding: 20px;
  }

  &__title {
    font-size: 26px;
  }

  &__date {
    font-size: 20px;
  }

  &__content {
    font-size: 16px;
    padding: 10px 0;
    letter-spacing: 1px;
  }
}

.before-enter {
  opacity: 0;
  transform: translateX(100%);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
