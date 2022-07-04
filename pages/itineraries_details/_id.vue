<!-- ITINERARIES DETAILS PAGE -->
<!-- page for the details of an itineraries -->

<template>
  <div>
    <!-- passing to GenericDetailsPage component all the info needed -->
    <generic-details-page
      :name="name"
      :image="img"
      :alt_image="alt_img"
      :neigh="neigh"
      :description="description"
      :site="site"
      :duration="duration"
    />
    <div class="container mt-5">
      <!-- div for the traveling stages and the map of an itinerary, if there aren't traveling stages the map go to full width -->
      <div
        :class="isEmpty(poiList) ? 'grid-container-empty' : 'grid-container'"
      >
        <div class="map-item">
          <!-- passing to Map component all the info needed -->
          <map-component :mode="'directions'" :poi-list="poiList" />
        </div>
        <div class="grid-item">
          <!-- passing to JoinTableCard component all the info needed -->
          <join-component :poi-list="poiList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenericDetailsPage from '~/components/GenericDetailsPage.vue'
import MapComponent from '~/components/Map.vue'
import JoinComponent from '~/components/JoinTableCard'
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  components: {
    MapComponent,
    GenericDetailsPage,
    JoinComponent,
  },
  mixins: [CommonMixin],

  // function to take the info about the itinerary from the backend with an api call
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraries_details/' + id)
    return {
      name: data.name,
      duration: data.duration,
      description: data.description,
      site: data.site,
      alt_img: data.alt_img,
      img: data.img,
      neigh: data.neigh,
      poiList: data.point_of_interests,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToList() {
      // function to push in the url the link to go back in the list page
      this.$router.push('/itineraries')
    },
    isEmpty(poiList) {
      // check if the list is empty
      return poiList[0] == null;
    },
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}

.grid-container-empty {
  display: grid;
  grid-template-columns: auto;
}

.grid-item {
  text-align: center;
  max-width: 100%;
}

.map-item {
  text-align: center;
  min-width: 50%;
}

/* responsiveness */
@media only screen and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: auto;
  }
}
</style>
