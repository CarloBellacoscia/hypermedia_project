<!--suppress CssUnknownTarget -->
<template>
  <div class="main-page">
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Archivo:wght@100&family=Open+Sans:wght@300&display=swap" rel="stylesheet" type="text/css">
    <the-header />
    <nuxt style="min-height: 79vh" />
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
body{
  margin-top: 100px;

}
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
  font-size: 30px;
  line-height: 33px;
  text-decoration: none;
  color: black;
}
h2 {
  font-family: 'Archivo', sans-serif;
  font-size: 40px;
  line-height: 45px;
  text-decoration: none;
  color: black;
}

p {
  text-decoration: none;
  text-align: left;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
}
@media only screen and (max-width: 900px) {

  h1 {
    font-size: 25px;
    line-height: 26px;
  }

  .row{
    justify-content: center;
  }
}
/*
*, ::after, ::before {
  box-sizing: inherit;
}
*/
</style>
