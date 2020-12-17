<template>
  <main id="topMain" class="main">
    <no-ssr>
      <div
        v-masonry="'containerId'"
        transition-duration="0.3s"
        item-selector=".item"
        class="masonryWrap"
      >
        <div
          v-for="(item, index) in photoList"
          :key="index"
          v-masonry-tile
          class="masonryWrap_item item"
        >
          <img :src="item.src" />
        </div>
      </div>
    </no-ssr>
  </main>
</template>

<style lang="scss">
.main {
  width: 100%;
}
.masonryWrap {
  margin: auto;
  width: 90%;
}
.item {
  width: 100%;
  margin: 0 0 8px 0;
}
.item img {
  display: block;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .item {
    width: calc(100% / 3 - 20px);
    margin: 10px;
  }
}
@media screen and (min-width: 1440px) {
  .item {
    width: calc(100% / 4 - 20px);
  }
}
</style>

<script>
import NoSSR from 'vue-no-ssr'
export default {
  components: {
    'no-ssr': NoSSR
  },
  data() {
    return {
      photoList: [
        {
          label: 'test1',
          src: 'https://placehold.jp/150x150.png'
        },
        {
          label: 'test2',
          src: 'https://placehold.jp/150x300.png'
        },
        {
          label: 'test3',
          src: 'https://placehold.jp/150x150.png'
        },
        {
          label: 'test4',
          src: 'https://placehold.jp/150x300.png'
        },
        {
          label: 'test5',
          src: 'https://placehold.jp/350x150.png'
        },
        {
          label: 'test6',
          src: 'https://placehold.jp/150x600.png'
        }
      ]
    }
  },
  mounted() {
    if (this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>
