<!-- DETAIL PAGE COMPONENT -->
<!-- used as details pages composed by an image with some info and a description below -->

<template>
  <div class="container mt-5">
    <div class="details-page">
      <h1 class="page">
        {{ name }}
      </h1>
      <div class="first-row grid-container">
        <img :src="image" :alt="alt_image" />
        <div class="details">
          <!-- optional div for the start date of an event -->
          <div v-if="start_date" class="grid-container">
            <h3 class="label">Start Date:<br /></h3>
            <h3 class="text">{{ start_date }}<br /></h3>
          </div>
          <!-- optional div for the end date of an event -->
          <div v-if="end_date" class="grid-container">
            <h3 class="label">End Date:<br /></h3>
            <h3 class="text">{{ end_date }}<br /></h3>
          </div>
          <!-- optional div for the duration of an itinerary -->
          <div v-if="duration" class="grid-container">
            <h3 class="label">Duration:<br /></h3>
            <h3 class="text">{{ duration }}<br /></h3>
          </div>
          <!-- optional div for the neighborhood -->
          <div v-if="neigh" class="grid-container">
            <img
              class="position-icon"
              src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
              alt="position icon"
            />
            <h3 class="text">{{ neigh }}<br /></h3>
          </div>
          <!-- optional div for the website -->
          <div v-if="site">
            <br /><br />
            <button class="button" @click="goToSite(site)">Website</button>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <p>{{ description }}</p>
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
    neigh: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    goToSite(site) {
      // open the website in another tab
      window.open(site)
    },
  },
}
</script>

<style scoped>
img {
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
}
.details {
  padding: 10px 10px 10px 10px;
}

.first-row {
  display: grid;
  padding: 20px 20px 20px 20px;
  grid-template-columns: 20% 60% 20%;
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

.button {
  font-family: 'Archivo Narrow', sans-serif;
  background-color: #d9d9d9;
  font-size: 22px;
}

.position-icon {
  position: relative;
  color: black;
  max-height: 30px;
  max-width: 30px;
}

.page {
  font-size: 40px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}

/* responsiveness */
@media only screen and (max-width: 900px) {
  .grid-container {
    grid-template-columns: auto;
  }
  .page{
    font-size: 30px;
  }
}
</style>
