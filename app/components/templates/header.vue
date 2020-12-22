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
    <div v-show="isModal" class="addModal">
      <div class="addModal_wrap">
        <p class="addModal_wrap_title">Add a new photo</p>
        <form class="addModal_wrap_form form" @submit.prevent="photoSubmit">
          <dl class="form_wrap">
            <div class="form_wrap_content -label">
              <dt>
                <label for="label">Label</label>
              </dt>
              <dd>
                <input
                  v-model="photoForm.label"
                  id="label"
                  type="text"
                  name="label"
                  placeholder="Suspendisse elit massa"
                />
              </dd>
            </div>
            <div class="form_wrap_content -label">
              <dt>
                <label for="url">Photo URL</label>
              </dt>
              <dd>
                <input
                  v-model="photoForm.src"
                  id="url"
                  type="text"
                  name="url"
                  placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                />
              </dd>
            </div>
          </dl>
          <div class="addModal_wrap_buttonWrap">
            <button class="modalButton -cancel" @click="isModal = !isModal">
              Cancel
            </button>
            <button type="submit" class="modalButton -submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModal: false,
      photoForm: {
        label: '',
        src: ''
      }
    }
  },
  methods: {
    async photoSubmit() {
      console.log(this.photoForm)
      try {
        await this.$axios
          .$post('/api/photo', this.photoForm)
          .then((response) => {
            if (response.result) {
              this.isModal = false
            }
          })
      } catch (error) {
        console.log(error)
        console.log('s')
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
