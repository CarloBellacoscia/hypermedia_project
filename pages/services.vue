<template>
  <div class="page container mt-5">
    <h1 class="page">
      <span class="low-highlight">Services</span>
    </h1>
    <div class="row mt-3">
      <card
        v-for="(ser, serIndex) of serList"
        :id="ser.id"
        :key="`services-index-${serIndex}`"
        class="col-sm-2 m-2"
        :category="'services_details'"
        :name="ser.name"
        :position = "ser.neigh"
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
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services')
    return {
      serList: data,
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
.page {
  text-align: left;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
}

.low-highlight {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}
</style>
