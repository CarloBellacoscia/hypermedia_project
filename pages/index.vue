<!--HOMEPAGE -->
<!-- landing page of the website -->


<template>
  <div class="mt-5">
    <!-- shows a random point of interest -->
    <rand-detail
      :id="id"
      :title="title"
      :img="image"
      :alt-img="altImg"
      :description="description"
    />
    <!-- shows 3 upcoming events-->
    <upcoming :event-list="eventList" />

    <!-- shows the 4 least added itineraries -->
    <new-it :list="itList" />
  </div>
</template>

<script>
import RandDetail from '~/components/RandomDetail.vue'
import NewIt from '~/components/ItineraryListComponent.vue'
import Upcoming from '~/components/UpcomingEvent.vue'

// i filter the events to show only the upcoming
function filterEvents(array){
  const today = new Date()
  const filtered =[]

  for(const e of array){
    if(new Date(e.start_date) >= today){
       filtered.push(e)
    }
  }
  return filtered.slice(0,3) // i decided to show only 3 events
}

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

    const tempEvent = filterEvents(eventList.data)
    const tempIt = itList.data.slice(0,4)

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
