<template>
  <div class="my-card">
    <nuxt-link :to="`/${category}/${id}`" style="text-decoration: none">
      <div class="my-container">
        <div
          class="my-card-image"
          :style="{ 'background-image': 'url(' + img + ')' }"
        >
          <div class="my-card-box-shadow">
            <div class="my-card-body">
              <h5 class="my-card-title">{{ name }}</h5>
              <p class="my-card-sub">{{ subtitle }}</p>
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
    subtitle: {
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

.my-card {
  width: 400px;
  height: 400px;
  border: 2px solid lightgray;
}
.my-card:hover {
  border: 2px solid #d70000;
}
.my-card-box-shadow {
  position: relative;
  top: 300px;
  left: 10px;
  width: 370px;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
}
.my-container {
  margin: 4px 10px 10px -10px;
  height: 390px;
  width: 390px;
}
.my-card-image {
  z-index: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.my-card-title {
  position: relative;
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
  position: relative;
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  top: 13px;
  left: 10px;
  color: #d9d9d9;
}
</style>
