<!-- EVENTS DETAILS PAGE -->
<!-- page for the details of an event -->

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
      :start_date="formatDate(start_date)"
      :end_date="formatDate(end_date)"
    />
    <div class="container mt-5">
      <!-- div for the position and the map of an event, if there isn't the position the map go to full width -->
      <div
        :class="!poi ? 'grid-container-empty' : 'grid-container'"
      >
        <div class="map-item">
          <!-- passing to Map component all the info needed -->
          <map-component :position="position" :mode="'place'" />
        </div>
        <div class="grid-item">
          <!-- passing to JoinTableCard component all the info needed -->
          <join-component :poi-item="poi" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapComponent from '~/components/Map.vue'
import GenericDetailsPage from '~/components/GenericDetailsPage.vue'
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

  // function to take the info about the event from the backend with an api call
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/events_details/' + id)
    return {
      name: data.name,
      description: data.description,
      img: data.img,
      alt_img: data.alt_img,
      site: data.site,
      start_date: data.start_date,
      end_date: data.end_date,
      neigh: data.neigh,
      position: data.point_of_interest.place_id,
      poi: data.point_of_interest,
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
      this.$router.push('/events')
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
