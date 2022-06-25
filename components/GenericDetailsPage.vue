<template>
  <div class="container mt-5">
    <div class="details-page">
      <h1 class="page">
        <span class="low-highlight">{{ name }}</span>
      </h1>
      <div class="first-row">
        <img :src="image" alt="" />
        <div class="details">
          <p class="text">
            {{ label1 }}<br />{{ value1 }}<br /><br />{{ label2 }}<br />{{ value2 }}<br /><br />{{ label3 }}<br />{{ value3 }}
          </p>
        </div>
      </div>
      <hr class="my-4" />
      <p class="text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenericDetailsPage',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    label1: {
      type: String,
      required: true,
    },
    label2: {
      type: String,
      required: true,
    },
    label3: {
      type: String,
      required: true,
    },
    value1: {
      type: String,
      required: true,
    },
    value2: {
      type: String,
      required: true,
    },
    value3: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>

img {
  height: 300px;
}
.details {
  padding-left: 55%;
}

.page {
  text-align: center;
  max-width: 800px;
  color: black;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
  display: flex;
}

.first-row {
  display: grid;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  grid-template-columns: 20% 60% 20%;
}

.details {
  padding-left: 50%;
}

.text {
  text-align: center;
  max-width: 100%;
  color: black;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-size: 24px;
  display: flex;
}

p {
  text-align: left;
}

.low-highlight {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}
</style>
