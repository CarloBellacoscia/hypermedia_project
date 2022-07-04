<!--CONTACT US PAGE -->
<!-- page containing contact information -->

<template>
  <custom-page :title="title" :image="image" :alt-img="altImg" :brief="brief" :content="content" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'ContactPage',
  components: {
    CustomPage,
  },
// fetch the info from API
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/contact')
    const title = data.title
    const image = data.image
    const content = data.content
    const altImg = data.alt_img
    const brief = data.brief
    return {
      title,
      brief,
      image,
      content,
      altImg
    }
  },
}
</script>
