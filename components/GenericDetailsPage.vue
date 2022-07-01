<template>
  <div class="container mt-5">
    <div class="details-page">
      <h1 class="page">
        {{ name }}
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
            <img
              class="position-icon"
              src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
              alt="position icon"
            />
            <h3 class="text">{{ neigh }}<br /></h3>
          </div>
          <div v-if="site">
            <br /><br />
            <button class="button" @click="goToSite(site)">Site</button>
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
      window.open(site)
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

.button {
  font-family: 'Archivo Narrow', sans-serif;
  background-color: #d9d9d9;
  font-size: 22px;
  opacity: 80%;
}

.position-icon {
  position: relative;
  color: black;
  max-height: 30px;
  max-width: 30px;
}
</style>
