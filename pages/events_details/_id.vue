<template>
  <div>
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
      <div
        :class="poiItem ? 'grid-container-empty' : 'grid-container'"
      >
        <div class="map-item">
          <map-component :position="position" :mode="'place'" />
        </div>
        <div class="grid-item">
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
  max-width: 50%;
}

.map-item {
  text-align: center;
  min-width: 50%;
}

@media only screen and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: auto;
  }
}
</style>
