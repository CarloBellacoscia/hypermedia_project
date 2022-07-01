<template>
  <div>
    <generic-details-page
      :name="name"
      :image="img"
      :alt_image="alt_img"
      :neigh="neigh"
      :description="description"
      :site="site"
    />
    <div class="container mt-5">
      <div
        :class="
          isEmpty(itList, evList) ? 'grid-container-empty' : 'grid-container'
        "
      >
        <div class="map-item">
          <map-component :mode="'place'" :position="position" />
        </div>
        <div class="grid-item">
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
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/poi')
    },
    isEmpty(itList, evList) {
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
  max-width: 50%;
}

.map-item {
  text-align: center;
  min-width: 100%;
}

@media only screen and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: auto;
  }
}
@media {
}
</style>
