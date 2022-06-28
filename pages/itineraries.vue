<template>
  <div class="page container mt-5">
    <h1 class="page">
      Itineraries
    </h1>
    <div class="row mt-3">
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
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    return {
      itList: data,
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
.page {
  text-align: left;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
}
</style>
