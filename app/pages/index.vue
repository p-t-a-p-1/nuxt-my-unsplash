<template>
  <main id="topMain" class="main">
    <div class="masonryWrap">
      <div
        v-for="(item, index) in response.photos"
        :key="index"
        class="masonryWrap_item item"
      >
        <figure class="item_imgWrap">
          <img :src="item.photo_url" :alt="item.label" />
          <div class="item_imgWrap_mask">
            <figcaption>{{ item.label }}</figcaption>
            <button @click="openModal(index)">delete</button>
          </div>
          <RemoveModal v-if="isModal && modalNumber == index">
            <div>モーダルの内容</div>
            <div>モーダルの内容</div>
            <div>モーダルの内容</div>
            <div>モーダルの内容</div>
            <div>モーダルの内容</div>
            <button @click="closeModal">閉じる</button>
          </RemoveModal>
        </figure>
      </div>
    </div>
  </main>
</template>

<script>
import RemoveModal from '~/components/organisms/RemoveModal.vue'
export default {
  components: {
    RemoveModal
  },
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
    return {
      response,
      hasContents
    }
  },
  data() {
    return {
      hasContents: false,
      isModal: false,
      modalNumber: 0
    }
  },
  mounted() {
    if (this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    openModal(index) {
      this.isModal = true
      this.modalNumber = index
    },
    closeModal() {
      this.isModal = false
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
  margin: 0 auto;
  padding: 5px;
  width: 90%;
  background-color: #fff;
  column-count: 3;
  column-gap: 0;
}
@media (max-width: 800px) {
  .masonryWrap {
    column-count: 2;
  }
}
@media (max-width: 480px) {
  .masonryWrap {
    column-count: 1;
  }
}
.item {
  padding: 5px;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
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
</style>
