<template>
  <div class="container mt-5">
    <div class="content-row">
      <img class="my-image" :src="image" :alt="altImg" />
      <div class="details-box">
        <h2 >{{ title }}</h2>
        <p >{{ brief }}</p>
      </div>
    </div>
    <hr v-if="content" />
    <div>
      <div v-for="(elem, i) of content" :key="`parag-${i}`">
        <h1 v-if="elem.title">{{ elem.title }}</h1>
        <p v-if="elem.description">{{ elem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    altImg: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>


.content-row {
  display: flex;
  background-color: #d9d9d9;

}


img {
  margin: 10px 10px 10px 10px;
  z-index: 0;
  height: 400px;
  object-fit: cover;
  border: 3px solid lightgray;
}

@media only screen and (max-width: 1200px) {
  .content-row {
    display: block;
    justify-content: center;
    padding: 10px 30px 10px 10px;
  }
  img {
    max-width: 100%;
    height: auto;
    max-height: 400px;
  }
}


.details-box {
  margin: 10px 10px 10px 10px;

}
</style>
