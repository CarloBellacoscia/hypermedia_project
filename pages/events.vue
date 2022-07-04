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
            @click="setAll()"
            style="background-color: rgba(255, 0, 0, 0.1)"
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
      </div>

      <!--list container -->
      <div class="row mt-3">

        <!--every card has a condition that displays it only if:
         *) is in the interval of dates sets OR
         *) the flag show all is set AND
         *)-->

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
      </div>
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
    return {
      initial_date: new Date(),
      final_date: new Date(),
      title: 'All Events',
      showAll: true,
      count: 0,
      today: '',
      init: '',
      fin: '',
      past: true,
    }
  },
  mounted() {
    this.initialize()
    this.count = this.countCards()
  },
  updated() {
    this.count = this.countCards()
  },
  methods: {
    initialize() {
      const temp = new Date()
      this.init = ''
      this.init +=
        temp.getDate() + '/' + (temp.getMonth() + 1) + '/' + temp.getFullYear()
      this.fin = ''
      this.today = ''
      this.fin += this.init
      this.today += this.fin
    },
    parseDates() {
      const inA = this.init.split('/').map((e) => {
        return parseInt(e)
      })
      const finA = this.fin.split('/').map((e) => {
        return parseInt(e)
      })
      this.setDates(inA, finA)
    },
    setDates(inA, finA) {
      this.showAll = false
      this.initial_date = new Date(
        new Date().setFullYear(inA[2], inA[1] - 1, inA[0])
      ).setHours(0, 0, 0)
      this.final_date = new Date(
        new Date().setFullYear(finA[2], finA[1] - 1, finA[0])
      ).setHours(23, 59, 59)
      if (!(this.initial_date && this.final_date)) {
        this.initialize()
        this.setAll()
      } else {
        this.title = 'Custom Dates'
      }
    },

    season(init, fin, title, carry = false) {
      this.showAll = false
      let temp = new Date().getFullYear()
      this.init = ''
      this.init += init[0] + '/' + init[1] + '/' + temp
      if (carry) {
        temp += 1
      }
      this.fin = ''
      this.fin += fin[0] + '/' + fin[1] + '/' + temp
      this.parseDates()
      this.title = title
    },
    setAll() {
      this.showAll = true
      this.title = 'All Events'
    },
    setToday() {
      this.showAll = false
      this.init = ''
      this.init += this.today
      this.fin = ''
      this.fin += this.today
      this.parseDates()
      this.title = 'Today'
    },
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
    log() {
      console.log(new Date(this.initial_date))
      console.log(new Date(this.final_date))
    },
  },
}
</script>

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
