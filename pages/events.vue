<template>
  <div>
    <div class="page container mt-5">
      <h1 class="page">
        <span class="low-highlight">All Events</span>
      </h1>
      <div class="row mt-3">
        <card
          v-for="(event, eventIndex) of eventList"
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          class="col-sm-2 m-2"
          :category="'events_details'"
          :name="event.name"
          :img="event.img"
          :alt_img="event.alt_img"
          :date="
            formatDate(event.start_date) + ' - ' + formatDate(event.end_date)
          "
          :position="event.position"
        />
      </div>
    </div>
    <div class="page container mt-5">
      <h1 class="page">
        <span class="low-highlight">Summer Events</span>
      </h1>
      <div class="row mt-3">
        <card
          v-for="(event, eventIndex) of summerList"
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          class="col-sm-2 m-2"
          :category="'events_details'"
          :name="event.name"
          :img="event.img"
          :alt_img="event.alt_img"
          :date="
            formatDate(event.start_date) + ' - ' + formatDate(event.end_date)
          "
          :position="event.position"
        />
      </div>
    </div>
    <div class="page container mt-5">
      <h1 class="page">
        <span class="low-highlight">Winter Events</span>
      </h1>
      <div class="row mt-3">
        <card
          v-for="(event, eventIndex) of winterList"
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          class="col-sm-2 m-2"
          :category="'events_details'"
          :name="event.name"
          :img="event.img"
          :alt_img="event.alt_img"
          :date="
            formatDate(event.start_date) + ' - ' + formatDate(event.end_date)
          "
          :position="event.position"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import Card from '~/components/GenericCard.vue'
export default {
  name: 'EventPage',
  components: {
    Card,
  },
  mixins: [CommonMixin],
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    /* const [data, summer, winter] = await $axios.all([
      $axios.get('/api/events'),
      $axios.get('/api/summer_events'),
      $axios.get('/api/winter_events'),
    ]) */
    const summer = []
    const winter = []
    const summerStart = new Date('2022-06-21')
    const summerEnd = new Date('2022-09-21')
    const winterStart = new Date('2022-12-21')
    const winterEnd = new Date('2022-03-21')
    for (const element of data){
      const date = new Date(element.start_date)
      if(date >= summerStart && date <= summerEnd){
        summer.push(element)
      } else if(date >= winterStart || date <= winterEnd){
        winter.push(element)
      }
    }
    return {
      eventList: data,
      summerList: summer,
      winterList: winter,
    }
  },
  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>

<style scoped>
.page {
  text-align: left;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
}
.low-highlight {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}
</style>
