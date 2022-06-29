<template>
  <div class="small_row">
    <div v-if="poiList" class="page container mt-5">
      <h1>
        Traveling Stages:
      </h1>
      <div class="row mt-3">
        <card
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :category="'poi_details'"
          class="col-sm-2 m-2"
          :name="poi.name"
          :position="poi.neigh"
          :img="poi.img"
          :alt_img="poi.alt_img"
        />
      </div>
    </div>
    <div v-if="itList" class="page container mt-5">
      <h1>
        Related Itineraries:
      </h1>
      <div class="row mt-3">
        <card
          v-for="(it, itIndex) of itList"
          :id="it.id"
          :key="`it-index-${itIndex}`"
          :category="'itineraries_details'"
          class="col-sm-2 m-2"
          :name="it.name"
          :img="it.img"
          :alt_img="it.alt_img"
          :duration="it.duration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/GenericCard'
import CommonMixin from '~/mixins/common'
export default {
  name: 'JoinTable',
  components: {
    Card,
  },
  mixins: [CommonMixin],
  props: {
    poiList: {
      type: Array,
      required: false,
      default: null,
    },
    itList: {
      type: Array,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>
.small_row{
  display: flex;
  justify-content: center;
  max-height: 20%;
}
</style>
