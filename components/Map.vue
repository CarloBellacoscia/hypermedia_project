<!-- MAP COMPONENT -->
<!-- a map using google embed map API -->

<template>
  <iframe
    class="map"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    :src="src"
    style="border: 0"
  >
  </iframe>
</template>

<script>
import CommonMixin from "~/mixins/common";

export default {
  name: 'MapComponent',
  mixins: [CommonMixin],
  props: {
    // the operation mode: "place" to show a single marker, "direction" for multiple markers
    mode:{
      type: String,
      required: true,
      default: 'place',
    },
    // PLACE_ID used in "place" mode
    position: {
      type: String,
      required: false,
      default: 'Milano',
    },
    // Array of PLACE_ID used in "direction" mode
    poiList: {
      type: Array,
      required: false,
    },
  },
  // client side methods used to construct the search query
  data(){
    return {
      src: '',
       key: 'AIzaSyBteWhfclgZ7dttnB0WC6zJsITmF2q-o8c',
    }},

  mounted() {
    this.composeSrc()
  },

  methods: {

    // search query builder
    composeSrc(){
      // adds the API key to the base url and the mode
      this.src='https://www.google.com/maps/embed/v1/'
      this.src+= this.mode + '?key=' + this.key

      // adds places information
      if(this.mode==="place"){
        this.src+= '&q=place_id:' + this.position // single place
      }else{
        // Multiple places

        const len = this.poiList.length
        this.src+= '&mode=transit'
        /* alternative mode */
        // this.src+= '&mode=driving'
        // this.src+= '&mode=walking'
        this.src+= '&zoom=12' // zoom level

        // route information
        this.src+= '&origin=place_id:' + (this.poiList[0].place_id)
        this.src+= '&destination=place_id:' + (this.poiList[len-1].place_id)
        if(len>2){
          this.src+= '&waypoints=place_id:' + (this.poiList[1].place_id)
        }
        for(let i = 2; i < len-1; i++){
          this.src+= '|place_id:' + this.poiList[i].place_id
        }
      }


    },
  },
}
</script>
<!-------------------STYLE--------------------->
<style scoped>
.map {
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 500px;
  object-fit: cover;
}
@media only screen and (max-width: 900px) {
  .map {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
