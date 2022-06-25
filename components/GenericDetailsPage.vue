<template>
  <div class="container mt-5">
    <div class="details-page">
      <h1 class="page">
        <span class="low-highlight">{{ name }}</span>
      </h1>
      <div class="first-row">
        <img :src="image" alt="" />
        <div class="details">
          <div v-if="start_date">
            <p class="label">Start Date:<br /></p>
            <p class="text">{{ start_date }}<br /></p>
          </div>
          <div v-if="end_date">
            <p class="label">End Date:<br /></p>
            <p class="text">{{ end_date }}<br /></p>
          </div>
          <div v-if="duration">
            <p class="label">Duration:<br /></p>
            <p class="text">{{ duration }}<br /></p>
          </div>
          <div v-if="gps">
            <p class="label">GPS:<br /></p>
            <p class="text">{{ gps }}<br /></p>
          </div>
          <div v-if="neigh">
            <p class="label">Neighborhood:<br /></p>
            <p class="text">{{ neigh }}<br /></p>
          </div>
          <div v-if="site">
            <p class="label">Site:<br /></p>
            <p class="text">{{ site }}<br /></p>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <p class="text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenericDetailsPage',
  props: {
    name: {
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
    start_date: {
      type: String,
      required: false,
    },
    end_date: {
      type: String,
      required: false,
    },
    site: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    gps: {
      type: String,
      required: false,
    },
    neigh: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>

img {
  height: 300px;
}
.details {
  padding-left: 55%;
}

.page {
  text-align: center;
  max-width: 800px;
  color: black;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
  display: flex;
}

.first-row {
  display: grid;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  grid-template-columns: 20% 60% 20%;
}

.details {
  padding-left: 50%;
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

.label {
  text-align: left;
  max-width: 100%;
  color: black;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  display: flex;
}

p {
  text-align: left;
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
