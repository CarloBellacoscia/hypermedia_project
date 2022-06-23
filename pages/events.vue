<template>
  <div class="page container mt-5">
    <h1 class="display-4">Event page</h1>
    <div class="row mt-3">
      <card
        v-for="(event, eventIndex) of eventList"
        :id="event.id"
        :key="`event-index-${eventIndex}`"
        class="col-sm-2 m-2"
        :name="event.name"
        :img="event.img"
        :start_date="event.start_date"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  name: 'EventPage',
  components: {
    Card,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
