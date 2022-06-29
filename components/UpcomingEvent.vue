<template>
  <div class="container mt-5">
    <div class="title-row"><h1>Upcoming events</h1></div>
    <div class="row content-row">
      <card
        v-for="i of [0, 1, 2]"
        :id="eventList[i].id"
        :key="`event-index-${i}`"
        class="col-sm-2 m-2"
        :category="'events_details'"
        :name="eventList[i].name"
        :img="eventList[i].img"
        :alt_img="eventList[i].alt_img"
        :date="
          formatDate(eventList[i].start_date) +
          ' - ' +
          formatDate(eventList[i].end_date)
        "
        :position="eventList[i].position"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/GenericCard'
import CommonMixin from '~/mixins/common'
export default {
  name: 'UpcomingComponent',
  components: {
    Card,
  },
  mixins: [CommonMixin],
  props: {
    eventList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>


.content-row {
  /*display: flex;
  justify-content: center;*/
  background-color: #d9d9d9;
}

</style>
