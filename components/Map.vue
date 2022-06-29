<template>
  <iframe
    allowfullscreen
    height="450"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDZ8TCwa4tSZdVGqzu7Ez1joVie69QJe64&q=' + place"
    style="border: 0"
    width="600"
  >
  </iframe>
</template>

<script>
export default {
  name: 'MapComponent',
  props: {
    place: {
      type: String,
      required: true,
      default: 'Milano',
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

<style scoped></style>
