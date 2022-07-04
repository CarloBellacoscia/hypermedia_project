<!-- POINTS OF INTEREST PAGE -->
<!-- page for the list of points of interest -->

<template>
  <div class="page container mt-5">
    <h1>
      Points of Interest
    </h1>
    <div class="row mt-3">
      <!-- passing to GenericCard component all the info needed -->
      <card
        v-for="(poi, poiIndex) of poiList"
        :id="poi.id"
        :key="`poi-index-${poiIndex}`"
        class="col-sm-2 m-2"
        :category="'poi_details'"
        :name="poi.name"
        :position="poi.neigh"
        :img="poi.img"
        :alt_img="poi.alt_img"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/GenericCard.vue'
export default {
  name: 'PointsOfInterestPage',
  components: {
    Card,
  },

  // function to take the list of all the points of interest from the backend with an api call
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/poi')
    return {
      poiList: data,
    }
  },
}
</script>
