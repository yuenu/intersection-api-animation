<template>
  <section class="images">
    <img v-scrollanimation src="../assets/coffee01.jpg" alt="coffee01" />
    <img v-scrollanimation src="../assets/coffee02.jpg" alt="coffee02" />
    <img v-scrollanimation src="../assets/coffee03.jpg" alt="coffee03" />
    <img v-scrollanimation src="../assets/coffee04.jpg" alt="coffee04" />
  </section>
</template>

<style lang="scss" scoped>
.images {
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  img {
    float: left;
    width: 50%;
    height: auto;
  }
}

.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
</style>
