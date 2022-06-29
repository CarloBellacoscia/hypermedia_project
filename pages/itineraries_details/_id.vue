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
      <map-component
        :place="formatPosition('Milano')"
      />
    </div>
  </div>
</template>

<script>
import GenericDetailsPage from '~/components/GenericDetailsPage.vue'
import MapComponent from '~/components/Map.vue'
import CommonMixin from "~/mixins/common";
export default {
  name: 'DetailsPage',
  components: {
    MapComponent,
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
      alt_img: data.alt_img,
      img: data.img,
      neigh: data.neigh,
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
