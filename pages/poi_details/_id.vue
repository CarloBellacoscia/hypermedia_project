<!-- POINTS OF INTEREST DETAILS PAGE -->
<!-- page for the details of a point of interest -->

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
    />
    <div class="container mt-5">
      <!-- div for related itineraries, events hosted and the map of a point of interest,
       if there aren't related itineraries and events hosted the map go to full width -->
      <div
        :class="
          isEmpty(itList, evList) ? 'grid-container-empty' : 'grid-container'
        "
      >
        <div class="map-item">
          <!-- passing to Map component all the info needed -->
          <map-component :mode="'place'" :position="position" />
        </div>
        <div class="grid-item">
          <!-- passing to JoinTableCard component all the info needed -->
          <join-component :it-list="itList" :ev-list="evList" />
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
    GenericDetailsPage,
    MapComponent,
    JoinComponent,
  },
  mixins: [CommonMixin],

  // function to take the info about the point of interest from the backend with an api call
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/poi_details/' + id)
    return {
      name: data.name,
      description: data.description,
      site: data.site,
      img: data.img,
      alt_img: data.alt_img,
      neigh: data.neigh,
      itList: data.itineraries,
      evList: data.events,
      position: data.place_id,
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
      this.$router.push('/poi')
    },
    isEmpty(itList, evList) {
      // check if the lists are empty
      return itList[0] == null && evList[0] == null;
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
  min-width: 100%;
}

/* responsiveness */
@media only screen and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: auto;
  }
}

</style>
