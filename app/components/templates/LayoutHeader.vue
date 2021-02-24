<template>
  <div>
    <header class="header">
      <div class="header_left">
        <nuxt-link to="/" class="header_left_logo">
          <img src="@/assets/img/my_unsplash_logo.svg" />
        </nuxt-link>
        <div class="header_left_search">
          <input type="text" placeholder="Search by name" />
        </div>
      </div>
      <div class="header_right">
        <button class="header_right_button" @click="isModal = !isModal">
          Add a photo
        </button>
      </div>
    </header>
    <add-modal :is-modal="isModal"></add-modal>
  </div>
</template>

<script>
import AddModal from '~/components/organisms/AddModal.vue'
export default {
  name: 'LayoutHeader',
  components: {
    AddModal
  },
  data() {
    return {
      isModal: false
    }
  },
  methods: {
    async photoSubmit() {
      try {
        await this.$axios
          .$post('/api/photo', this.photoForm)
          .then((response) => {
            if (response.result) {
              this.isModal = false
              // リロード
              location.reload()
            }
          })
      } catch (error) {
        // console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  margin: auto;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  &_left {
    display: flex;
    align-items: center;
    &_search {
      margin-left: 32px;
      input {
        padding-left: 56px;
        width: 300px;
        height: 55px;
        border: 1px solid #bdbdbd;
        box-sizing: border-box;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
        border-radius: 12px;
      }
    }
  }
  &_right {
    &_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 137px;
      height: 55px;
      cursor: pointer;
      font: {
        family: Noto Sans;
        style: normal;
        weight: bold;
        size: 16px;
      }
      line-height: 22px;
      /* identical to box height */
      color: #fff;
      border: none;
      background: #3db46d;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      transition: 0.3s;
      &:hover {
        border: 1px solid #3db46d;
        color: #3db46d;
        background-color: #fff;
      }
    }
  }
}
.addModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0.25);
  z-index: 1000;
  &_wrap {
    width: 620px;
    height: 367.2px;
    background: #fff;
    border-radius: 12px;
    padding: 28px 32px;
    &_title {
      font: {
        family: Noto Sans;
        style: normal;
        weight: 500;
        size: 24px;
      }
      line-height: 33px;
      color: #333;
    }
    &_form {
      padding-top: 20px;
    }
    &_buttonWrap {
      padding-top: 24px;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
    }
  }
}
.modalButton {
  margin-left: 8px;
  cursor: pointer;
  width: 105px;
  height: 55px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: none;
  font: {
    family: Noto Sans;
    style: normal;
    weight: 500;
    size: 16px;
  }
  line-height: 22px;
  transition: 0.3s;
  &.-cancel {
    color: #bdbdbd;
    background-color: #fff;
    &:hover {
      opacity: 0.7;
    }
  }
  &.-submit {
    color: #fff;
    background-color: #3db46d;
    &:hover {
      color: #3db46d;
      background-color: #fff;
      border: 1px solid #3db46d;
    }
  }
}
.form {
  div + div {
    padding-top: 18px;
  }
  &_wrap {
    dt {
      label {
        font: {
          family: Noto Sans;
          style: normal;
          weight: 500;
          size: 14px;
        }
        line-height: 19px;
        color: #4f4f4f;
      }
    }
    dd {
      margin-right: 6px;
      padding-top: 10px;
      input {
        width: 100%;
        height: 55px;
        padding-left: 18px;
        border: 1px solid #4f4f4f;
        box-sizing: border-box;
        filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
        border-radius: 12px;
      }
    }
  }
}
</style>
