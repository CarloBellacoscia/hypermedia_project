<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1>
        {{ title }}
      </h1>
      <img :src="image" alt="" />
      <hr class="my-4" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

img {
  height: 300px;
  margin: 20px 0;
}


</style>
