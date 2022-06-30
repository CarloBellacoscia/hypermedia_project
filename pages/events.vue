<template>
  <div>
    <div class="page container mt-5">
      <h1>
        {{ title }}
      </h1>
      <div class="selector">
        <button style="margin-right: 20px" @click="all()">All</button>
        <button @click="today()">Today</button>
        <button style="margin-right: 20px" @click="tomorrow()">Tomorrow</button>

        <button @click="season(3, 20, 20, 'This Spring')">Spring</button>
        <button @click="season(6, 20, 22, 'This Summer')">Summer</button>
        <button @click="season(9, 22, 21, 'This Fall')">Fall</button>
        <button @click="season(12, 21, 20, 'This Winter')">Winter</button>
      </div>

      <div class="row mt-3">
        <card
          v-for="(event, eventIndex) of eventList"
          v-show="
            new Date(event.start_date) >= initial_date &&
            new Date(event.start_date) <= final_date
          "
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          class="col-sm-2 m-2 card-to-count"
          :category="'events_details'"
          :name="event.name"
          :img="event.img"
          :alt_img="event.alt_img"
          :date="
            formatDate(event.start_date) + ' - ' + formatDate(event.end_date)
          "
          :position="event.position"
        />
        <div v-show="count===0"><p style="color: darkred">There are no event in MI for the selected date!</p></div>
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
    return {
      eventList: data,
    }
  },
  data() {
    return {
      initial_date: new Date().setFullYear(0),
      final_date: new Date().setFullYear(new Date().getFullYear() + 1000),
      title: 'All Events',
      count: 0,
    }
  },
  mounted() {
    this.countCards()
  },
  updated() {
    this.countCards()
  },
  methods: {
    countCards() {
      let j=0
      const x = document.getElementsByClassName('card-to-count')
      let el
      for ((el) of x){
      if (window.getComputedStyle(el).display !== 'none') {
        j +=1
      }
      }
      this.count = j
      console.log(this.count)
    },

    // i compute the seasons summing 3 to the moth i pass to the method
    season(month, init, fin, title) {
      this.initial_date = new Date(
        new Date().setMonth(month - 1, init)
      ).setHours(0, 0, 0)
      this.final_date = new Date(
        new Date().setMonth(month + 2, fin - 1)
      ).setHours(23, 59, 59)
      this.title = title
      this.log()
    },
    all() {
      this.initial_date = new Date().setFullYear(0)
      this.final_date = new Date().setFullYear(new Date().getFullYear() + 1000)
      this.title = 'All Events'
    },
    today() {
      this.initial_date = new Date().setHours(0, 0, 0)
      this.final_date = new Date().setHours(24, 0, 0)
      this.title = 'Today'
      this.log()
    },
    tomorrow() {
      this.initial_date = new Date().setHours(24, 0, 0)
      this.final_date = new Date().setHours(48, 0, 0)
      this.title = 'Tomorrow'
      this.log()
    },
    log() {
      console.log(new Date(this.initial_date))
      console.log(new Date(this.final_date))
    },
  },
}
</script>

<style scoped>
.selector {
  background-color: #cccccc;
  font-size: 20px;
  line-height: 25px;
  position: sticky;
  top: 80px;
  z-index: 1000;
  padding: 10px 0 10px 30px;
  margin-left: -30px;
}
</style>
