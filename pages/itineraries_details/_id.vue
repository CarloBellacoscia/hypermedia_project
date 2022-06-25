<template>
  <generic-details-page
    :name="name"
    :image="img"
    :description="description"
    :site="site"
    :duration="duration"
  />
</template>

<script>
import GenericDetailsPage from '~/components/GenericDetailsPage.vue'
import CommonMixin from "~/mixins/common";
export default {
  name: 'DetailsPage',
  components: {
    GenericDetailsPage,
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
      img: data.img,
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  mounted(){
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
