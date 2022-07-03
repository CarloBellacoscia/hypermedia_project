<!-- GENERIC LIST ELEMENT COMPONENT -->
<!-- simple single row element with basic info about an itinerary -->

<template>
  <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
    <!-- main container -->
    <div class="my-elem">

      <!-- opt duration information with icon -->
      <div v-if="duration" class="my-elem-duration">
          <img
            class="my-elem-date-icon"
            src="https://cdn-icons-png.flaticon.com/512/1842/1842869.png"
            alt=""
          />
          <p>{{ duration}}</p>
          </div>

      <!-- main text of the element -->
      <h3 class="my-elem-title">{{ name }}</h3>
    </div>
  </nuxt-link>
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
    duration: {
      type: String,
      required: false,
      default: '',
    },
  },
  // changes pages when we click on a row

  methods: {
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

<!-------------------STYLE--------------------->

<style scoped>
p{
  font-size: 20px;
}
.my-elem {
  padding: 13px 10px 0 10px;
  min-height: 10px;
  background-color: rgba(0,0,0,0.1);
  display: flex;
}
.my-elem:hover {
  background-color: rgba(0,0,0,0.2);

}

.my-elem-date-icon {
  height: 25px;
  padding-right: 10px;
}

.my-elem-duration {
  min-width: 100px;
  display: flex;
}

.my-elem-title{
}

.my-elem-title{
  padding-left: 30px;
}
</style>
