<!--ABOUT MI PAGE -->
<!-- page containing general information about milan -->

<template>
  <custom-page :title="title" :image="image" :brief="brief" :alt-img="altImg" :content="content" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'AboutPage',
  components: {
    CustomPage,
  },

  // fetch information from API
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const title = data.title
    const image = data.image
    const altImg = data.alt_img
    const brief = data.brief
    const content = data.content
    return {
      title,
      content,
      image,
      altImg,
      brief

    }
  },
}
</script>
