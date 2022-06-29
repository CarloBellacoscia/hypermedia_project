<template>
  <div>
    <generic-details-page
      :name="name"
      :image="img"
      :alt_image="alt_img"
      :neigh="neigh"
      :description="description"
      :site="site"
      :gps="gps"
    />
    <div class="container mt-5">
      <map-component
        :place="formatPosition(name)"
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
    GenericDetailsPage,
    MapComponent,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/poi_details/' + id)
    return {
      name: data.name,
      description: data.description,
      gps: data.gps,
      site: data.site,
      img: data.img,
      alt_img: data.alt_img,
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
      this.$router.push('/poi')
    },
  },
}
</script>
