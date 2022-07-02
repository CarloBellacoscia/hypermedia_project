<template>
  <iframe
    class="map"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    :src="this.src"
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
    mode:{
      type: String,
      required: true,
      default: 'place',
    },
    position: {
      type: String,
      required: false,
      default: 'Milano',
    },
    poiList: {
      type: Array,
      required: false,
    },
  },
  data(){
    return {
      src: '',
       key: 'AIzaSyBteWhfclgZ7dttnB0WC6zJsITmF2q-o8c',
    }},
  mounted() {
    this.composeSrc()
  },
  updated() {
   // console.log(this.src)
  },
  methods: {
    composeSrc(){
      this.src='https://www.google.com/maps/embed/v1/'
      this.src+= this.mode + '?key=' + this.key
      console.log(this.src)
      if(this.mode==="place"){
        this.src+= '&q=place_id:' + this.position
      }else{
        const len = this.poiList.length
        this.src+= '&mode=transit'
        // this.src+= '&mode=driving'
        // this.src+= '&mode=walking'
        this.src+= '&zoom=12'
        this.src+= '&origin=place_id:' + (this.poiList[0].place_id)
        this.src+= '&destination=place_id:' + (this.poiList[len-1].place_id)
        if(len>2){
          this.src+= '&waypoints=place_id:' + (this.poiList[1].place_id)
        }
        for(let i = 2; i < len-1; i++){
          this.src+= '|place_id:' + this.poiList[i].place_id
        }
      }

      console.log(this.src)


    },
    goToDetails() {
      this.$router.push(`/${this.category}/${this.id}`)
    },
  },
}
</script>

<style scoped>
.map {
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 500px;
  object-fit: cover;
}
@media only screen and (max-width: 900px) {
  .map {
    height: 300px;
    object-fit: cover;
  }
}
</style>
