<template>
  <div class="mt-5">
    <rand-detail
      :id="id"
      :title="title"
      :img="image"
      :alt-img="altImg"
      :description="description"
    /><upcoming :event-list="eventList" />
    <new-it :list="itList" />
  </div>
</template>

<script>
import RandDetail from '~/components/RandomDetail.vue'
import NewIt from '~/components/ItineraryListComponent.vue'
import Upcoming from '~/components/UpcomingEvent.vue'

export default {
  name: 'IndexPage',
  components: {
    RandDetail,
    Upcoming,
    NewIt,
  },
  async asyncData({ $axios }) {
    const [{ data }, eventList, itList] = await Promise.all([
      $axios.get('/api/rnd_poi'),
      $axios.get('/api/events'),
      $axios.get('/api/itineraries'),
    ])
    const id = data.id
    const title = data.name
    const image = data.img
    const altImg = data.alt_img
    const description = data.description

    const tempEvent = eventList.data
    const tempIt = itList.data
    tempEvent.length=3
    tempIt.length=4

    return {
      id,
      title,
      description,
      image,
      altImg,
      eventList: tempEvent,
      itList: tempIt,
    }
  },
}
</script>

<style></style>
