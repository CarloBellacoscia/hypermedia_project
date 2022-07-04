<!-- SERVICES DETAILS PAGE -->
<!-- page for the details of a service -->

<template>
  <div>
    <!-- passing to GenericDetailsPage component all the info needed -->
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
      <!-- passing to Map component all the info needed -->
      <map-component
        :mode="'place'"
        :position="position"
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

  // function to take the info about the service from the backend with an api call
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/services_details/' + id)
    return {
      name: data.name,
      description: data.description,
      position: data.place_id,
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
  methods: {
    backToList() {
      // function to push in the url the link to go back in the list page
      this.$router.push('/services')
    },
  },
}
</script>
