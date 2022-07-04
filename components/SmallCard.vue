<!-- SMALL CARD COMPONENT -->
<!-- used in details pages to list in JoinTableCard:
      traveling stages
      related itineraries
      events hosted
      position
-->

<template>
  <div class="my-card">
    <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
        <img class="my-card-image" :src="img" :alt="alt_img" />
      <!-- optional div for the date over the card -->
        <div v-if="date" class="my-card-date">
          <img
            class="my-card-date-icon"
            src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
            alt="clock icon"
          />
          <p class="my-card-date-text">{{ date }}</p>
        </div>
      <!-- optional div for the duration over the card -->
        <div v-if="duration" class="my-card-date">
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
            <!-- optional div for the position in the subtitle of the card -->
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
    alt_img: {
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
      // function to push in the url the link to the detail page
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

<style scoped>
.my-card {
  top:0;
  left: 0;
  position: relative;

  width: 200px;
  height: 200px;
}
.my-card-image:hover {
  border: 2px solid #d70000;
}
.my-card-box-shadow {
  position: absolute;
  bottom: 10px;
  left: 8px;
  width: 188px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
}

.my-card-image {
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 2px solid lightgray;
}

.my-card-title {
  position: absolute;
  text-align: left;
  width: 90%;
  height: 20px;
  left: 10px;
  right: 10px;
  top: 0;

  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #fff;
}
.my-card-sub {
  position: absolute;
  font-family: 'Archivo', sans-serif;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  top: 20px;
  left: 25px;
  color: #d9d9d9;
}

.my-card-position-icon {
  position: absolute;
  top: 20px;
  left: 10px;
  max-height: 12px;
  filter: invert(100%);
}

.my-card-date-icon {
  position: absolute;
  bottom: 1px;
  left: 10px;
  max-height: 18px;
}
.my-card-date-text {
  position: absolute;
  right: 5px;
  top: 5px;
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #252525;
}

.my-card-date {
  width: 170px;
  height: 20px;
  position: absolute;
  bottom: 50px;
  right: 5px;
  background-color: rgba(217, 217, 217, 0.8);
  text-align: right;
}

/* responsiveness */
@media only screen and (max-width: 990px) {
  .my-card-image{
    height: 150px;
    width: 150px;
  }
  .my-card {
    width: 150px;
    height: 150px;
  }
  .my-card-box-shadow {
    width: 140px;
    height: 30px;
  }
  .my-card-title {
    font-size: 11px;
  }
  .my-card-date {
    width: 140px;
    height: 20px;
    bottom: 40px;
    right: 0;
  }
  .my-card-date-text {
    font-size: 9px;
  }
  .my-card-date-icon {
    bottom: 2px;
    left: 13px;
    max-height: 15px;
  }
  .my-card-sub {
    top: 15px;
    font-size: 9px;
  }
  .my-card-position-icon {
    top: 18px;
    max-height: 9px;
  }
}
</style>
