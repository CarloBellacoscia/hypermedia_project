<template>
  <div class="main-page">
    <the-header />
    <nuxt style="padding-top:50px" />
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
/*
*, ::after, ::before {
  box-sizing: inherit;
}
*/
</style>
