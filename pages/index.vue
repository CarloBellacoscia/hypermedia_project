<template>
  <div class="mt-5">
    <rand-detail
      :id="id"
      :title="title"
      :img="image"
      :alt-img="altImg"
      :description="description"
    /><upcoming :event-list="eventList"/>
  </div>
</template>

<script>
import RandDetail from '~/components/RandomDetail.vue'
import Upcoming  from '~/components/UpcomingEvent.vue'

export default {
  name: 'IndexPage',
  components: {
    RandDetail,
    Upcoming,


  },
  async asyncData({ $axios }) {
    const [{data}, eventList] = await Promise.all([$axios.get('/api/rnd_poi'), $axios.get('/api/events')])
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
      eventList: eventList.data,
    }
  },
}
</script>

<style></style>
