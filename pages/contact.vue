<template>
  <custom-page :title="title" :image="image" :alt-img="altImg" :brief="brief" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'ContactPage',
  components: {
    CustomPage,
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/contact')
    const title = data.title
    const image = data.image
    const altImg = data.alt_img
    const brief = data.brief
    return {
      title,
      brief,
      image,
      altImg
    }
  },
}
</script>
