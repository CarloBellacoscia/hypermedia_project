<!--suppress CssUnknownTarget -->
<template>
  <div class="main-page">
    <the-header />
    <nuxt style="padding-top:60px; min-height: 84vh" />
    <the-footer />
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
/*
*, ::after, ::before {
  box-sizing: inherit;
}
*/
</style>
