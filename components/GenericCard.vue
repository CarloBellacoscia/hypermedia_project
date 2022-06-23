<template>
  <div class="card">
    <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
      <div
        class="card-image"
        :style="{ 'background-image': 'url(' + img + ')' }"
      >
        <div class="card-box-shadow">
          <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-date">{{ start_date }} - {{ end_date }}</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');

.card {
  width: 440px;
  height: 440px;
  border: 2px solid lightgray;
}
.card:hover {
  border: 2px solid #d70000;
}
.card-box-shadow {
  position: relative;
  width: 400px;
  height: 80px;
  left: 20px;
  top: 330px;
  background: rgba(0, 0, 0, 0.6);
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 440px;
}

.card-title {
  position: relative;
  width: 380px;
  height: 20px;
  left: 10px;
  right: 10px;
  top: 0px;

  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  color: #fff;
}
.card-date {
  position: relative;
  width: 380px;
  height: 20px;
  left: 10px;
  right: 10px;
  top: 5px;
  /*background-color: #D9D9D9f0;*/

  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;

  color: #d9d9d9;
}
</style>

<script>
export default {
  name: 'GenericCardComponent',
  props: {
    category: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },

    // only for events
    start_date: {
      type: String,
      required: false,
    },
    end_date: {
      type: String,
      required: false,
    },

    // position to be updated

    gps: {
      type: String,
      required: false,
    },
    // only for itinerary
    duration: {
      type: String,
      required: false,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>
