<!-- CUSTOM PAGE COMPONENT -->
<!-- used as generic information pages composed by optional subparagraph -->

<template>
  <div class="container mt-5">
    <!-- general info section -->
    <div class="content-row">
      <img class="my-image" :src="image" :alt="altImg" />
      <div class="details-box">
        <h1>{{ title }}</h1>
        <p>{{ brief }}</p>
        <!-- short text paragraph -->
      </div>
    </div>
    <!-- optional paragraph section  -->
    <hr v-if="content" />
    <div v-if="content">
      <div v-for="(elem, i) of content" :key="`parag-${i}`">
        <h2 v-if="elem.title">{{ elem.title }}</h2>
        <p v-if="elem.description" style="padding-bottom: 20px">
          {{ elem.description }}
        </p>
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
      required: false,
    },
  },
}
</script>

<!-------------------STYLE--------------------->
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
.details-box {
  margin: 10px 10px 10px 10px;
}

/*make it responsive*/
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
</style>
