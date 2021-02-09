<template>
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
                id="label"
                v-model="photoForm.label"
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
                id="url"
                v-model="photoForm.src"
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
</template>

<script>
export default {
  name: 'AddModal',
  props: {
    isModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      photoForm: {
        label: '',
        src: ''
      }
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

<style lang="scss" scoped>
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
