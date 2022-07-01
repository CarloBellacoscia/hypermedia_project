<template>
  <custom-page :title="title" :image="image" :brief="brief" :alt-img="altImg" :content="content" />
</template>

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'FaqPage',
  components: {
    CustomPage,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/faq')
    const title = data.title
    const image = data.image
    const altImg = data.alt_img
    const brief = data.brief
    const content = data.content
    const description = data.description
    return {
      title,
      description,
      image,
      altImg,
      brief,
      content
    }
  },
}
</script>
