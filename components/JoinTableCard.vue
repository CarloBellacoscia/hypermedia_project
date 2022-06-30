<template>
  <div class="small_row">
    <div v-if="poiList" class="page container mt-5">
      <h2 class="label">
        Traveling Stages:
      </h2>
      <div class="grid-container">
        <card
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :category="'poi_details'"
          class="grid-item"
          :name="poi.name"
          :position="poi.neigh"
          :img="poi.img"
          :alt_img="poi.alt_img"
        />
      </div>
    </div>
    <div v-if="itList" class="page container mt-5">
      <h2 class="label">
        Related Itineraries:
      </h2>
      <div class="grid-container">
        <card
          v-for="(it, itIndex) of itList"
          :id="it.id"
          :key="`it-index-${itIndex}`"
          class="grid-item"
          :category="'itineraries_details'"
          :name="it.name"
          :img="it.img"
          :alt_img="it.alt_img"
          :duration="it.duration"
        />
      </div>
    </div>
    <div v-if="poiItem" class="page container mt-5">
      <h2 class="label">
        Associated Point of Interest:
      </h2>
      <div class="grid-container">
        <card
          :id="poiItem.id"
          :category="'poi_details'"
          class="grid-item"
          :name="poiItem.name"
          :position="poiItem.neigh"
          :img="poiItem.img"
          :alt_img="poiItem.alt_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/SmallCard'
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
    poiItem: {
      type: Object,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  max-width: 50%;
}

.grid-item {
  text-align: center;
}

.label {
  text-align: left;
}
</style>

<style scoped>
.small_row{
  display: flex;
  justify-content: center;
  max-height: 20%;
}
</style>
