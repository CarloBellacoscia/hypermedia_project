<template>
  <div class="container mt-5">
    <div class="title-row">
      <h1>Upcoming events</h1>
        <nuxt-link style="text-decoration: none" to="/events"
          ><h1 class="see-more">See All ➔</h1></nuxt-link
        >
      </div>
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
.title-row {
  display: flex;
  justify-content: space-between;
}

.see-more:hover {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}
.content-row {
  justify-content: center;
  margin: 0 0 0 0;
  background-color: #d9d9d9;
}
</style>
