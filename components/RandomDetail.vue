<template>
  <div class="container mt-5">
    <div class="title-row"><h1>Discover MI</h1></div>
    <nuxt-link :to="`/poi_details/${id}`" style="text-decoration: none">
      <div class=" content-row">
        <div style="text-align: center">
          <img class="my-image" :src="img" :alt="altImg" />
        </div>
        <div class="details-box">
          <h1 >{{ title }}</h1>
          <p >{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'RandomDetailComponent',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    altImg: {
      type: String,
      required: true,
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


.content-row {
  padding: 20px 20px 20px 20px;
  display: flex;
  justify-content: space-evenly;
  background-color: #d9d9d9;
  grid-template-columns: 30% 70%;

}


.my-image {
  position: relative;
  z-index: 0;
  max-width: 360px;
  height: 100%;
  border: 3px solid lightgray;
  object-fit: cover;
}


.details-box {
  margin-left: 15px;
}

@media only screen and (max-width: 900px) {
  .content-row {
    display: table;
    justify-content: center;
    padding: 10px 8px 10px 8px;
  }
  .my-image {
    max-height: 300px;
    max-width: 100%;
    margin-bottom: 10px;
  }
}
</style>
