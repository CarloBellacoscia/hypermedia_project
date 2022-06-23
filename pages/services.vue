<template>
  <div class="page container mt-5">
    <h1 class="display-4">Services</h1>
    <div class="row mt-3">
      <card
        v-for="(ser, serIndex) of serList"
        class="col-sm-2 m-2"
        :category="'services_details'"
        :key="`services-index-${serIndex}`"
        :id="ser.id"
        :name="ser.name"
        :subtitle = "ser.gps"
        :img="ser.img"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/GenericCard.vue'
export default {
  name: 'ServicesPage',
  components: {
    Card,
  },
  data() {
    return {
      // catList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services')
    return {
      serList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
