<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="page">
        <span class="low-highlight">{{ title }}</span>
      </h1>
      <img :src="image" alt="" />
      <hr class="my-4" />
      <p class="text">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Archivo:wght@100&display=swap');

img {
  height: 300px;
  margin: 20px 0;
}
.page {
  text-align: left;
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
}

p {
  text-align: left;
}

.text {
  text-align: center;
  max-width: 100%;
  color: black;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-size: 24px;
  display: flex;
}

.low-highlight {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}

</style>

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
