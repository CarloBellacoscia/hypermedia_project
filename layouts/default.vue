<!--suppress CssUnknownTarget -->
<template>
  <div class="main-page">
    <the-header />
    <nuxt style="padding-top:60px; min-height: 79vh" />
    <the-footer style="margin-top: 50px"/>
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

h1{
  font-family: 'Archivo', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  text-decoration: none;
  color: black;
}

p{
  text-decoration: none;
  color: black;
}

/*
*, ::after, ::before {
  box-sizing: inherit;
}
*/
</style>
