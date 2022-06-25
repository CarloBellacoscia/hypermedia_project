<template>
  <div class="my-card">
    <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
      <div class="my-container">
        <div
          class="my-card-image"
          :style="{ 'background-image': 'url(' + img + ')' }"
        >
          <div v-if="date" style="width: 270px" class="my-card-date">
            <img
              class="my-card-date-icon"
              src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
             alt="clock icon"/>
            <p class="my-card-date-text">{{ date }}</p>
          </div>
          <div v-if="duration" style="width: 150px" class="my-card-date">
            <img
              class="my-card-date-icon"
              src="https://cdn-icons-png.flaticon.com/512/1842/1842869.png"
              alt="stopwatch icon"
            />
            <p class="my-card-date-text">{{ duration }}</p>
          </div>
          <div class="my-card-box-shadow">
            <div class="my-card-body">
              <h5 class="my-card-title">{{ name }}</h5>
              <div v-if="position">
                <img
                  class="my-card-position-icon"
                  src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
                  alt="position icon"
                />
                <p class="my-card-sub">{{ position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

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
    position: {
      type: String,
      required: false,
      default: '',
    },
    date: {
      type: String,
      required: false,
      default: '',
    },
    duration: {
      type: String,
      required: false,
      default: '',
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
.my-card {
  position: relative;
  width: 400px;
  height: 400px;
  border: 2px solid lightgray;
}
.my-card:hover {
  border: 2px solid #d70000;
}
.my-card-box-shadow {
  position: absolute;
  top: 300px;
  left: 10px;
  width: 370px;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
}
.my-container {
  position: absolute;
  margin: 4px 10px 10px -10px;
  height: 390px;
  width: 390px;
}
.my-card-image {
  position: absolute;
  z-index: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.my-card-title {
  position: absolute;
  width: 380px;
  height: 20px;
  left: 10px;
  right: 10px;
  top: 10px;

  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  color: #fff;
}
.my-card-sub {
  position: absolute;
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  top: 46px;
  left: 33px;
  color: #d9d9d9;
}

.my-card-position-icon {
  position: absolute;
  top: 47px;
  left: 10px;
  max-height: 18px;
  filter: invert(100%);
}

.my-card-date-icon {
  position: absolute;
  bottom: 7px;
  left: 10px;
  max-height: 18px;
}
.my-card-date-text {
  position: absolute;
  right: 5px;
  top: 5px;
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #252525;
}

.my-card-date {
  height: 30px;
  position: absolute;
  bottom: 90px;
  right: 10px;
  background-color: rgba(217, 217, 217, 0.8);
  text-align: right;
}
</style>
