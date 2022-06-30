<!--suppress CssUnknownTarget -->
<template>
  <div class="main-page">
    <the-header />
    <nuxt style="padding-top: 60px; min-height: 79vh" />
    <the-footer style="margin-top: 50px" />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Archivo:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');


/*responsive bar*/
.navbar-toggler-icon {
  filter: invert(100%);
}
.navbar-toggler {
  background-color: rgba(255, 255, 255, 0.1);
}

div{
  border-radius: 2px;
}

/*generic style*/
button {
  border-radius: 4px;
}

h1 {
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  text-decoration: none;
  color: black;
}

p {
  text-decoration: none;
  text-align: left;
  font-weight: 400;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 17px;
}

/*
*, ::after, ::before {
  box-sizing: inherit;
}
*/
</style>
