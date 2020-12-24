<template>
  <main id="topMain" class="main">
    <div
      v-masonry="'containerId'"
      transition-duration="0.3s"
      item-selector=".item"
      class="masonryWrap"
    >
      <div
        v-for="(item, index) in response.photos"
        :key="index"
        v-masonry-tile
        class="masonryWrap_item item"
      >
        <figure class="item_imgWrap">
          <img :src="item.photo_url" :alt="item.label" />
          <div class="item_imgWrap_mask">
            <figcaption>{{ item.label }}</figcaption>
            <button>delete</button>
          </div>
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $axios }) {
    let response = ''
    let hasContents = false
    await $axios.$get('/api/photo/list').then((result) => {
      if (result.photos !== undefined && result.photos.length >= 1) {
        response = result
        hasContents = true
      }
    })
    console.log(response)
    return {
      response,
      hasContents
    }
  },
  mounted() {
    if (this.$redrawVueMasonry === 'function') {
      console.log('aa')
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

$color: #c53434;
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $color;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
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
  &_imgWrap {
    width: 100%;
    position: relative;
    img {
      display: block;
      width: 100%;
      border-radius: 16px;
    }
    &_mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background-color: rgba($color: #000000, $alpha: 0.38);
      border-radius: 16px;
      transition: 0.2s;
      figcaption {
        position: absolute;
        bottom: 32px;
        left: 24px;
        font: {
          family: Montserrat;
          style: normal;
          weight: 500;
          size: 18px;
        }
        line-height: 22px;
        color: #fff;
      }
      button {
        cursor: pointer;
        position: absolute;
        top: 18px;
        right: 18px;
        border: 1px solid #eb5757;
        background-color: unset;
        box-sizing: border-box;
        border-radius: 38px;
        width: 63px;
        height: 23px;
        font: {
          family: Montserrat;
          style: normal;
          weight: 500;
          size: 10px;
        }
        line-height: 12px;
        color: #eb5757;
        transition: 0.3s;
        &:hover {
          color: #fff;
          background-color: #eb5757;
        }
      }
    }
  }
  &:hover {
    .item_imgWrap_mask {
      opacity: 1;
    }
  }
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
