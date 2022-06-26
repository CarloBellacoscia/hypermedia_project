<template>

  <div>test</div>
</template>

<script>
export default {
  name: 'MapComponent',
  props: {
  },
  methods: {
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

<style scoped>
</style>
