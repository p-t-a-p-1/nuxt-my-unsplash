<template>
  <top-page />
</template>

<script>
import TopPage from '@/components/pages/top.vue'

export default {
  layout: 'default',
  components: {
    TopPage
  },
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
</style>
