<template>
  <div class="container mt-5">
    <div class="title-row">
      <h1>New Itineraries</h1>
      <nuxt-link to="/itineraries" style="text-decoration: none" ><h1 class="see-more">See All ➔</h1></nuxt-link>
    </div>
    <div class="row content-row" style="list-style-type: none">
      <list-elem
        v-for="i of [0, 1, 2, 3]"
        :id="list[i].id"
        :key="`it-index-${i}`"
        class="col-sm-2 m-2"
        :category="'itineraries_details'"
        :name="list[i].name"
        :img="list[i].img"
        :alt_img="list[i].alt_img"
        :duration="list[i].duration"
      />
    </div>
  </div>
</template>

<script>
import ListElem from '~/components/GenericListElement.vue'
export default {
  name: 'UpcomingComponent',
  components: {
    ListElem,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.title-row {
  display: flex;
  justify-content: space-between;
}

.see-more:hover {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}

.content-row {
  display: list-item;
  justify-content: center;
  margin: 0 0 0 0;
  padding: 0 20px 0 20px;

  background-color: #d9d9d9;
}
</style>
