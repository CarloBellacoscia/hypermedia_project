<template>
  <div class="container mt-5">
    <div class="details-page">
      <h1 class="page">
        <span class="low-highlight">{{ name }}</span>
      </h1>
      <div class="first-row">
        <img :src="image" :alt="alt_image" />
        <div class="details">
          <div v-if="start_date">
            <h2 class="label">Start Date:<br /></h2>
            <h3 class="text">{{ start_date }}<br /></h3>
          </div>
          <div v-if="end_date">
            <h2 class="label">End Date:<br /></h2>
            <h3 class="text">{{ end_date }}<br /></h3>
          </div>
          <div v-if="duration">
            <h2 class="label">Duration:<br /></h2>
            <h3 class="text">{{ duration }}<br /></h3>
          </div>
          <div v-if="neigh">
            <h2 class="label">Neighborhood:<br /></h2>
            <h3 class="text">{{ neigh }}<br /></h3>
          </div>
          <div v-if="site">
            <h2 class="label">Site:<br /></h2>
            <h3 class="text">{{ site }}<br /></h3>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <h3 class="text">{{ description }}</h3>
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
    alt_image: {
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
      default: '',
    },
    end_date: {
      type: String,
      required: false,
      default: '',
    },
    site: {
      type: String,
      required: false,
      default: '',
    },
    duration: {
      type: String,
      required: false,
      default: '',
    },
    gps: {
      type: String,
      required: false,
      default: '',
    },
    neigh: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
img {
  width: 200%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
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
  color: #252525;
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
  /*background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );*/
}
</style>
