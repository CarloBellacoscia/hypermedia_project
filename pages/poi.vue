<template>
  <div class="page container mt-5">
    <h1>
      Points of Interest
    </h1>
    <div class="row mt-3">
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
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/poi')
    return {
      poiList: data,
    }
  },
  data() {
    return {
      // catList: []
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>

<style scoped>



</style>
