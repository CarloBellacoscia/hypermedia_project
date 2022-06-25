<template>
  <generic-details-page
    :name="name"
    :image="img"
    :description="description"
    :site="site"
    :start_date="formatDate(start_date)"
    :end_date="formatDate(end_date)"
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
    const { data } = await $axios.get('/api/events_details/' + id)
    return {
      name: data.name,
      description: data.description,
      img: data.img,
      site: data.site,
      start_date: data.start_date,
      end_date: data.end_date,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>
