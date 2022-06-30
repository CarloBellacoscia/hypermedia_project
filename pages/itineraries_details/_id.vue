<template>
  <div>
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
      <div class="grid-container">
        <div class="map-item">
          <map-component :place="formatPosition(poiList[0].name)" />
        </div>
        <div class="grid-item">
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
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
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
