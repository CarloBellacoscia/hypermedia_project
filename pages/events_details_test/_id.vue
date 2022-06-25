<template>
  <details-page
    :name="name"
    :img="img"
    :description="description"
    :label1="label1"
    :label2="label2"
    :label3="label3"
    :value1="value1"
    :value2="value2"
    :value3="value3"
  />
</template>

<script>
import CommonMixin from '~/mixins/common'
import DetailsPage from '~/components/DetailsPage.vue'
export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    DetailsPage,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/events_details/' + id)
    const name = data.name
    const description = data.description
    const img = data.img
    const label1 = 'Position'
    const label2 = 'Start Date'
    const label3 = 'End Date'
    const value1 = data.site
    const value2 = data.start_date
    const value3 = data.end_date
    return {
      name,
      description,
      img,
      label1,
      value1,
      label2,
      label3,
      value2,
      value3,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>
