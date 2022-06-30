<template>
  <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
    <div class="my-elem">
        <div v-if="duration" class="my-elem-duration">
          <img
            class="my-elem-date-icon"
            src="https://cdn-icons-png.flaticon.com/512/1842/1842869.png"
            alt="stopwatch icon"
          />
          <p>{{ duration}}</p>
          </div>
        <h1 class="my-elem-title">{{ name }}</h1>
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
  methods: {
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

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
  min-width: 150px;
  display: flex;
}

.my-elem-title{
}

.my-elem-title{
  padding-left: 30px;
}
</style>
