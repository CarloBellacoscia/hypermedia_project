<!--ALL EVENTS PAGE -->
<!-- page displaying a list with all the events. provides also basic filtering capabilities by date -->

<template>
  <div>
    <!-- main container -->
    <div class="page container mt-5">
      <h1>
        {{ title }}
      </h1>

      <!-- filtering bar -->
      <div class="selector">
        <div>
          <!-- buttons that resets filters-->
          <button
            class="sep-button"
            style="background-color: rgba(255, 0, 0, 0.1)"
            @click="setAll()"
          >
            All
          </button>

          <!-- buttons that filters by date -->
          <button @click="setToday()">Today</button>
          <button class="sep-button" @click="setTomorrow()">Tomorrow</button>
          <button @click="season([20, 3], [21, 6], 'This Spring')">
            Spring
          </button>
          <button @click="season([21, 6], [22, 9], 'This Summer')">
            Summer
          </button>
          <button @click="season([22, 9], [21, 12], 'This Fall')">Fall</button>
          <button @click="season([21, 12], [19, 3], 'This Winter', true)">
            Winter
          </button>
          <!-- checkbox to force only the display of upcoming events-->
          <span
            ><input v-model="past" type="checkbox" />
            <label for="checkbox">Show Past</label></span
          >
        </div>
        <!-- if im filtering by date, show the input box for... -->
        <div v-show="!showAll" class="data-input">
          <!--start date -->
          <input
            v-show="past"
            v-model="init"
            class="text-box"
            :placeholder="init"
          /><my v-show="!past" class="text-box">Today</my>
          - <!--separator -->
          <!--final date -->
          <input
            v-model="fin"
            class="text-box"
            :placeholder="fin"
          />
          <!--button that triggers filtering for custom dates -->
          <button @click="parseDates()">Filter</button>
        </div>
      </div>  <!--end of filter bar -->


      <!--list container -->
      <div class="row mt-3">

        <!--every card has a condition such that is display only if:
          (is in the interval of dates sets OR the flag show all is set)
          AND
          ( if past flag is not checked, must be also after today date)
          -->

        <card
          v-for="(event, eventIndex) of eventList"
          v-show="
            ((new Date(event.start_date) >= initial_date &&
              new Date(event.start_date) <= final_date) ||
              showAll) &&
            (new Date(event.start_date) >= new Date() || past)
          "
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          class="col-sm-2 m-2 card-to-count"
          :category="'events_details'"
          :name="event.name"
          :img="event.img"
          :alt-img="event.alt_img"
          :date="
            formatDate(event.start_date, true) +
            ' - ' +
            formatDate(event.end_date, true)
          "
          :position="event.position"
        />
      </div><!-- end of list -->


      <!-- disclaimer just in case there are no elements to show here. see script section for more details -->
      <div v-show="count === 0">
        <p style="color: darkred">
          There are no event in MI for the selected date!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import Card from '~/components/GenericCard.vue'
export default {
  name: 'EventPage',
  components: {
    Card,
  },
  mixins: [CommonMixin],
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  data() {
    // Local variables used in filtering
    return {

      title: 'All Events',
      initial_date: new Date(),   // start date of the interval initialized as "today"
      final_date: new Date(), // end date of the interval initialized as "today"

      // string version of the dates used for input and labelling purpose
      today: '', // for simplicity we store the current date
      init: '',
      fin: '',

      showAll: true, // if set, shows all events
      past: true, // if set false, shows only upcoming events

      count: 0, // used to check if something is displayed on the page

    }
  },

  // when the page is mounted we want to initialize the dates and count the shown cards inside the list
  mounted() {
    this.initialize()
    this.count = this.countCards()
  },

  // when we filter something the page is updated but not re-rendered, so we count again the cards
  updated() {
    this.count = this.countCards()
  },

  // LOCAL METHODS
  methods: {

    // initialize the string version of the dates like DD/MM/YYYY
    initialize() {
      const temp = new Date() // today
      this.init = ''
      this.init +=
        temp.getDate() + '/' + (temp.getMonth() + 1) + '/' + temp.getFullYear()
      this.fin = ''
      this.today = ''
      this.fin += this.init
      this.today += this.fin
    },

    // parses the dates. from string to integer array elements
    parseDates() {
      const inA = this.init.split('/').map((e) => {
        return parseInt(e) // converts into integers
      })
      const finA = this.fin.split('/').map((e) => {
        return parseInt(e)
      })
      this.setDates(inA, finA)
    },

    // from the integer array to DATE datatype
    setDates(inA, finA) {
      this.showAll = false // tells that we are not showing all events anymore

      // sets initial date of the interval starting from midnight
      this.initial_date = new Date(
        new Date().setFullYear(inA[2], inA[1] - 1, inA[0])
      ).setHours(0, 0, 0)

      // sets final date of the interval to the last second of the day
      this.final_date = new Date(
        new Date().setFullYear(finA[2], finA[1] - 1, finA[0])
      ).setHours(23, 59, 59)

      // if the date inserted are not correct for any reason we re-initialize the page
      if (!(this.initial_date && this.final_date)) {
        this.initialize()
        this.setAll()
      } else {
        // else we proceed setting the custom title
        this.title = 'Custom Dates'
      }
    },

    // set the seasons intervals.
    // the carry flag is used for winter months, when a season overflow in the next year
    season(init, fin, title, carry = false) {
      this.showAll = false // tells that we are not showing all events anymore

      let temp = new Date().getFullYear() // gets the current year
      this.init = ''
      this.init += init[0] + '/' + init[1] + '/' + temp

      if (carry) {
        temp += 1 // if is winter i need to consider also the following year
      }

      this.fin = ''
      this.fin += fin[0] + '/' + fin[1] + '/' + temp
      this.parseDates()
      this.title = title
    },

    // set the visualization to all
    setAll() {
      this.showAll = true
      this.title = 'All Events'
    },

    // sets the filter today
    setToday() {
      this.showAll = false
      this.init = ''
      this.init += this.today
      this.fin = ''
      this.fin += this.today
      this.parseDates()
      this.title = 'Today'
    },

    // sets the filter tomorrow
    setTomorrow() {
      this.showAll = false
      const temp1 = new Date(new Date().setHours(24, 0, 0))
      this.init = ''
      this.init +=
        temp1.getDate() +
        '/' +
        (temp1.getMonth() + 1) +
        '/' +
        temp1.getFullYear()


      const temp2 = new Date(new Date().setHours(48, 0, 0))
      this.fin = ''
      this.fin +=
        temp2.getDate() +
        '/' +
        (temp2.getMonth() + 1) +
        '/' +
        temp2.getFullYear()
      this.parseDates()
      this.title = 'Tomorrow'
    },
  },
}
</script>
<!-------------------STYLE--------------------->

<style scoped>
button {
  margin: 0 2px 0 0;
}
.text-box {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-align: center;
  width: 120px;
}
.text-box:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
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

.data-input {
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.sep-button {
  margin-right: 10px;
}

@media only screen and (max-width: 900px) {
  span {
    font-size: 15px;
    line-height: 15px;
    width: 80px;
  }
  button {
    margin: 0 0 0 0;
    width: 80px;
    font-size: 15px;
    line-height: 15px;
  }
  .sep-button {
    margin-right: 0;
  }
  .selector {
    display: block;
  }
  .data-input {
    margin-top: 10px;
    display: flex;
  }
}
</style>
