<!-- GENERIC CARD COMPONENT -->
<!-- simple card displaying image and basic info in lists -->

<template>
  <!-- main container -->
  <div class="my-card">
    <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
        <img class="my-card-image" :src="img" :alt="altImg" />

      <!-- Optional attribute section showed outside the shadow box -->
      <!-- date of events -->
        <div v-if="date" style="width: 270px" class="my-card-date">
          <img
            class="my-card-date-icon"
            src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
          />
          <p class="my-card-date-text">{{ date }}</p>
        </div>

      <!-- duration of an itinerary -->
        <div v-if="duration" style="width: 150px" class="my-card-duration">
          <img
            class="my-card-date-icon"
            src="https://cdn-icons-png.flaticon.com/512/1842/1842869.png"
          />
          <p class="my-card-date-text">{{ duration }}</p>
        </div>

      <!-- Main text box with black background -->
        <div class="my-card-box-shadow">
          <div class="my-card-body">
            <h5 class="my-card-title">{{ name }}</h5>

            <!-- position information  -->
            <div v-if="position">
              <img
                class="my-card-position-icon"
                src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
              />
              <p class="my-card-sub">{{ position }}</p>
            </div>
          </div>
        </div><!-- ed of shadow box-->
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
    altImg: {
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

  // changes pages when we click on a card
  methods: {
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

<!-------------------STYLE--------------------->

<style scoped>

.my-card {
  top:0;
  left: 0;
  position: relative;
  width: 400px;
  height: 400px;
}
.my-card-image:hover {
  border: 2px solid #d70000;
}
.my-card-box-shadow {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 370px;
  height: 80px;
  background: rgba(0, 0, 0, 0.7);
}

.my-card-image {
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  height: 400px;
  width: 400px;
  object-fit: cover;
  border: 2px solid lightgray;
}

.my-card-title {
  position: absolute;
  width: 380px;
  height: 20px;
  left: 10px;
  right: 10px;
  top: 10px;
  font-family: 'Archivo', sans-serif;
  font-size: 28px;
  line-height: 33px;
  color: #fff;
}
.my-card-sub {
  position: absolute;
  font-family: 'Archivo', sans-serif;
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
  left: 110px;
  background-color: rgba(217, 217, 217, 0.8);
  text-align: right;
}


.my-card-duration {
  height: 30px;
  position: absolute;
  bottom: 90px;
  left: 230px;
  background-color: rgba(217, 217, 217, 0.8);
  text-align: right;
}

/*make it responsive*/

@media only screen and (max-width: 990px) {

  .my-card-title {
    width: 350px;
    max-width: 100%;
  }
  .my-card-image{
    height: 250px;
    width: 350px;

  }
  .my-card {
    height: 250px;
    width: 350px;
  }
  .my-card-box-shadow {
    width: 330px;
  }

  .my-card-date{
    left: 70px;
  }
.my-card-duration{
  left: 190px;
}
}

</style>
