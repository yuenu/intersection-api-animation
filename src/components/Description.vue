<template>
  <section class="description">
    <p class="description__text" v-scrollanimation>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab incidunt
      reprehenderit, odio error quasi! Voluptate unde ut, cum similique, dicta a
      excepturi, temporibus iure optio eum expedita ullam repellendus.Asperiores
      voluptate quibusdam itaque ducimus numquam corrupti molestiae minus ipsum.
      Nobis aliquam vel, autem reiciendis rem aperiam ullam quam aspernatur
      temporibus ipsa minus ea cumque, laudantium doloribus. Quaerat, iusto
      unde.
    </p>
    <p class="description__text" v-scrollanimation>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab incidunt
      reprehenderit, odio error quasi! Voluptate unde ut, cum similique, dicta a
      excepturi, temporibus iure optio eum expedita ullam repellendus.Asperiores
      voluptate quibusdam itaque ducimus numquam corrupti molestiae minus ipsum.
      Nobis aliquam vel, autem reiciendis rem aperiam ullam quam aspernatur
      temporibus ipsa minus ea cumque, laudantium doloribus. Quaerat, iusto
      unde.
    </p>
    <p class="description__text" v-scrollanimation>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab incidunt
      reprehenderit, odio error quasi! Voluptate unde ut, cum similique, dicta a
      excepturi, temporibus iure optio eum expedita ullam repellendus.Asperiores
      voluptate quibusdam itaque ducimus numquam corrupti molestiae minus ipsum.
      Nobis aliquam vel, autem reiciendis rem aperiam ullam quam aspernatur
      temporibus ipsa minus ea cumque, laudantium doloribus. Quaerat, iusto
      unde.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.description {
  position: relative;
  width: 100%;
  min-height: 100vh;

  &__text {
    font-size: 18px;
    padding: 10px 20px;
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
