<!-- JOIN TABLE COMPONENT -->
<!-- used in details pages to show:
      traveling stages: list of points of interest associated to an itinerary
      related itineraries: list of itineraries passing throw a specific point of interest
      events hosted: list of events hosted in a point of interest
      position: the point of interest where is hosted an event
-->

<template>
  <div class="small-row">
    <!-- optional div for the traveling stages of an itinerary -->
    <div v-if="poiList" class="page container">
      <h2 v-if="poiList[0]" class="label">
        Traveling Stages:
      </h2>
      <div class="grid-container">
        <!-- passing to SmallCard component all the info needed -->
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
    <!-- optional div for the related itineraries of a point of interest -->
    <div v-if="itList" class="page container">
      <h2 v-if="itList[0]" class="label">
        Related Itineraries:
      </h2>
      <div class="grid-container">
        <!-- passing to SmallCard component all the info needed -->
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
    <!-- optional div for the events hosted of a point of interest -->
    <div v-if="evList" class="page container">
      <h2 v-if="evList[0]" class="label">
        <br>
        Events Hosted:
      </h2>
      <div class="grid-container">
        <!-- passing to SmallCard component all the info needed -->
        <card
          v-for="(ev, evIndex) of evList"
          :id="ev.id"
          :key="`it-index-${evIndex}`"
          class="grid-item"
          :category="'events_details'"
          :name="ev.name"
          :img="ev.img"
          :alt_img="ev.alt_img"
          :date="
            formatDate(ev.start_date, true) +
            ' - ' +
            formatDate(ev.end_date, true)
          "
          :position="ev.neigh"
        />
      </div>
    </div>
    <!-- optional div for the position of an event -->
    <div v-if="poiItem" class="page container">
      <h2 class="label">
        Position:
      </h2>
      <div class="grid-container">
        <!-- passing to SmallCard component all the info needed -->
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
    evList: {
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
  max-width: 100%;
  margin-left: 30px;
}

.container{
  margin: 0;
  padding: 0;
  max-width: 100%;
}
.grid-item {
  text-align: center;
}

.label {
  text-align: justify;
  width: 100%;
  font-size: 32px;
}

.small-row{
  display: grid;
  grid-template-columns: auto;
  padding: 10px 10px 10px 10px;
}

/* responsiveness */
@media only screen and (max-width: 900px) {
  .grid-container {
    grid-template-columns: auto auto;
    margin-left: 15px;
  }
  .label{
    font-size: 22px;
  }
}


</style>
