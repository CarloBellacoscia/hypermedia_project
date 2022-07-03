<!-- UPCOMING EVENTS COMPONENT -->
<!-- simple div that shows 3 event card -->


<template>
  <!-- main container -->
  <div class="container mt-5">

    <!--first row with title + see more button -->
    <div class="title-row">
      <h1>Upcoming events</h1>
        <nuxt-link style="text-decoration: none" to="/events"
          ><h1 class="see-more">See All ➔</h1></nuxt-link
        >
      </div>

    <!-- show a loop generated list of event cards -->
    <div class="row content-row">
      <card
        v-for="(e,i) of eventList"
        :id="e.id"
        :key="`event-index-${i}`"
        class="col-sm-2 m-2"
        :category="'events_details'"
        :name="e.name"
        :img="e.img"
        :alt_img="e.alt_img"
        :date=" // format the ugly date
          formatDate(e.start_date,1) +
          ' - ' +
          formatDate(e.end_date,1)
        "
        :position="e.position"
      />

    </div>
    <!-- disclaimer just in case there are no elements to show here -->
    <div v-if="!eventList.length"><p style="color:red">There are no upcoming events</p></div>
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
<!-------------------STYLE--------------------->
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
  justify-content: space-evenly;
  margin: 0 0 0 0;
  padding: 10px 0 10px 0;

  background-color: #d9d9d9;
}
</style>
