<template>
  <div class="page container mt-5">
    <h1 class="display-4">Itineraries</h1>
    <div class="row mt-3">
      <card
        v-for="(it, itIndex) of itList"
        class="col-sm-2 m-2"
        :category="'itineraries_details'"
        :key="`it-index-${itIndex}`"
        :id="it.id"
        :name="it.name"
        :img="it.img"
        :subtitle="it.gps"
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
