<!-- ITINERARIES PAGE -->
<!-- page for the list of itineraries -->

<template>
  <div class="page container mt-5">
    <h1>
      Itineraries
    </h1>
    <div class="row mt-3">
      <!-- passing to GenericCard component all the info needed -->
      <card
        v-for="(it, itIndex) of itList"
        :id="it.id"
        :key="`it-index-${itIndex}`"
        :category="'itineraries_details'"
        class="col-sm-2 m-2"
        :name="it.name"
        :img="it.img"
        :alt_img="it.alt_img"
        :duration="it.duration"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/GenericCard.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    Card,
  },

  // function to take the list of all the itineraries from the backend with an api call
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    return {
      itList: data,
    }
  },

}
</script>
