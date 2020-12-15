<template>
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
      <button class="header_right_button">Add a photo</button>
    </div>
  </header>
</template>

<script></script>

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
</style>
