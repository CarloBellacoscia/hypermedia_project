<!-- ITINERARY LIST COMPONENT -->
<!-- a box with a list of GENERIC LIST ELEMENTS -->

<template>
  <!-- main container -->
  <div class="container mt-5">

    <!--first row with title + see more button -->
    <div class="title-row">
      <h1>New Itineraries</h1>
      <nuxt-link to="/itineraries" style="text-decoration: none" ><h1 class="see-more">See All ➔</h1></nuxt-link>
    </div>

    <!-- show a loop generated list of basic elements -->
    <div class="row content-row" style="list-style-type: none">
      <list-elem
        v-for="(e,i) of list"
        :id="e.id"
        :key="`it-index-${i}`"
        class="col-sm-2 m-2"
        :category="'itineraries_details'"
        :name="e.name"
        :img="e.img"
        :alt_img="e.alt_img"
        :duration="e.duration"
      />
    </div>

    <!-- disclaimer just in case there are no elements to show here -->
  <div v-if="!list.length"><p style="color:red">There are nothing to show here</p></div>
  </div>
</template>

<script>
import ListElem from '~/components/GenericListElement.vue'
export default {
  name: 'UpcomingComponent',
  components: {
    ListElem,
  },
  props: {
    list: {
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
  display: list-item;
  justify-content: center;
  margin: 0 0 0 0;
  padding: 0 20px 0 20px;

  background-color: #d9d9d9;
}
</style>
