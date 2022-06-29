<template>
  <div>
  <rand-detail :id="id" :title="title" :img="image" :alt_img="altImg" :description="description" />
  </div>
</template>

<script>
import RandDetail from '~/components/RandomDetail.vue'
export default {
  name: 'IndexPage',
  components: {
    RandDetail,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/rnd_poi')
    const id = data.id
    const title = data.name
    const image = data.img
    const altImg = data.alt_img
    const description = data.description
    return {
      id,
      title,
      description,
      image,
      altImg,
    }
  },
}
</script>

<style>


</style>
