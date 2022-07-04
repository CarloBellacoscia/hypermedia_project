<!--ALL SERVICES PAGE -->
<!-- page displaying a list with all services. provides also basic filtering capabilities by category -->


<template>
  <!-- main container -->
  <div class="page container mt-5">

    <h1> {{ title }}</h1>

    <!-- filtering bar -->
    <div class="selector">
      <div>
        <!-- buttons that resets filters-->
        <button class="sep-button" style="background-color: rgba(255,0,0,0.1)" @click="setAll()">All</button>
        <!-- buttons that sets custom categories-->
        <button @click="setCat('pharmacies','Pharmacies')">Pharmacies</button>
        <button @click="setCat('health-services','Health')">Health</button>
        <button @click="setCat('libraries','Libraries')">Libraries</button>
        <button @click="setCat('parking','Parking')">Parking</button>
        <button @click="setCat('stations','Stations')">Stations</button>
        <button @click="setCat('banks','Banks')">Banks</button>
        <button @click="setCat('gyms','Gyms')">Gyms</button>
        <button @click="setCat('laundries','Laundries')">Laundries</button>
        <button @click="setCat('markets','Markets')">Markets</button>
        <button @click="setCat('bar','Bar')">Bar</button>
      </div>
    </div>   <!-- ends of filters-->

    <!--list container -->
    <div class="row mt-3">

      <!--if my category is the current then i show the card -->
      <card
        v-for="(ser, serIndex) of serList"
        v-show="category === ser.category || showAll"
        :id="ser.id"
        :key="`services-index-${serIndex}`"
        class="col-sm-2 m-2 card-to-count"
        :category="'services_details'"
        :name="ser.name"
        :position="ser.neigh"
        :img="ser.img"
        :alt-img="ser.alt_img"
      />

      <!-- disclaimer just in case there are no elements to show here. see script section for more details -->
      <div v-show="count === 0">
        <p style="color: darkred">
          There are no service yet in this category!
        </p>
        </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/GenericCard.vue'
import CommonMixin from "~/mixins/common";
export default {
  name: 'ServicesPage',
  components: {
    Card,
  },
  mixins: [CommonMixin],
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    return {
      serList: data,
    }
  },
  // local variables used for filtering
  data() {
    return {
      title:'All Services',
      category: '', // current category shown
      count:0, // number of cards displayed
      showAll: true,
    }
  },
  // count the shown cards inside the list when mounted or updated
  mounted() {
    this.count = this.countCards()
  },
  updated() {
    this.count = this.countCards()
  },
  methods: {

    // set the category to be shown
    setCat(cat,title) {
      this.showAll = false
      this.title=""
      this.title += title
      this.category=""
      this.category+=cat
    },
    // resets the filters
    setAll() {
      this.showAll = true
      this.title = 'All Services'
    },
  },
}
</script>
<!-------------------STYLE--------------------->
<style scoped>
.selector {
  display: flex;
  justify-content: space-between;
  background-color: #cccccc;
  font-size: 20px;
  line-height: 25px;
  position: sticky;
  top: 80px;
  z-index: 900;
  padding: 10px 0 10px 30px;
  margin-left: -30px;
}
@media only screen and (max-width: 900px) {
  button{
    margin: 0 0 0 0;
    width: 100px;
    font-size: 15px;
    line-height: 15px;
  }}
</style>
