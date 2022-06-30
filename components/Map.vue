<template>
  <iframe
    class="map"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyDZ8TCwa4tSZdVGqzu7Ez1joVie69QJe64&q=' + place"
    style="border: 0"
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

<style scoped>
.map {
  width: 90%;
  height: 500px;
  object-fit: cover;
}
@media only screen and (max-width: 900px) {
  .map {
    width: 50%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
