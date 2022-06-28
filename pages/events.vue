<template>
  <div>
    <div class="page container mt-5">
      <h1 class="page">
        {{title}}
      </h1>
      <div class="selector">
      <button style="margin-right: 20px" @click="all()">All</button>
      <button @click="today()">Today</button>
      <button style="margin-right: 20px" @click="tomorrow()">Tomorrow</button>

      <button @click="season(3,'This Spring')">Spring</button>
      <button @click="season(6,'This Summer')">Summer</button>
      <button @click="season(9,'This Fall')">Fall</button>
      <button @click="season(12,'This Winter')">Winter</button>
      </div>


      <div class="row mt-3">
        <card
          v-for="(event, eventIndex) of eventList"
          v-show="new Date (event.start_date) >= initial_date && new Date (event.start_date) <= final_date "
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
    return {
      eventList: data,
    }
  },
  data() {
    return {
      initial_date: new Date().setFullYear(0),
      final_date: new Date().setFullYear(new Date().getFullYear() + 1000),
      title: "All Events"
    }
  },
  methods: {
    // i compute the seasons summing 3 to the moth i pass to the method
   season (month, title){
     this.initial_date = new Date(new Date().setMonth(month-1,1)).setHours(0,0,0)
     this.final_date = new Date(new Date().setMonth(month+2,0)).setHours(23,59,59)
     this.title = title
     this.log()
   },
    all (){
      this.initial_date = new Date().setFullYear(0)
      this.final_date = new Date().setFullYear(new Date().getFullYear() + 1000)
      this.title = "All Events"
    },
    today (){
      this.initial_date = new Date().setHours(0,0,0)
      this.final_date = new Date().setHours(24,0,0)
      this.title = "Today"
      this.log()
    },
    tomorrow (){
      this.initial_date = new Date().setHours(24,0,0)
      this.final_date = new Date().setHours(48,0,0)
      this.title = "Tomorrow"
      this.log()
    },
    log (){
      console.log(new Date(this.initial_date))
      console.log(new Date(this.final_date))
    },
   },
}
</script>

<style scoped>


.selector{
  background-color: #cccccc;
  font-size: 35px;
  line-height: 40px;
  position:sticky;
  top:80px;
  z-index: 1000;
  padding: 10px 0 10px 30px;
  margin-left: -30px
}
.page {
  text-align: left;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
}
</style>
