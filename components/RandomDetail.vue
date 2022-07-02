<template>
  <div class="container mt-5">
    <div class="title-row"><h1>Discover MI</h1></div>
    <nuxt-link :to="`/poi_details/${id}`" style="text-decoration: none">
      <div class=" content-row">
        <div class="img-box">
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
  display: flex;
  background-color: #d9d9d9;
  grid-template-columns: 30% 70%;

}


.my-image {
  position: relative;
  z-index: 0;
  width: 360px;
  height: 210px;
  border: 3px solid lightgray;
  object-fit: cover;
}

.img-box {
  margin: 10px 10px 10px 10px;
  justify-content: center;
  position: relative;
  width: 360px;
  height: 210px;
  max-width: 100%;
}

.details-box {
  margin: 10px 10px 10px 10px;

}

@media only screen and (max-width: 900px) {
  .content-row {
    display: block;
    justify-content: center;
    padding: 10px 8px 10px 8px;
  }
  .my-image {
    width: 330px;
    height: 210px;
  }
}
</style>
