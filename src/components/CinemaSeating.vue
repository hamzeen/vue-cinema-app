<template>
  <div>
    <div class="movie-container hello">
      <h1>Cinema <span class="text-indigo-600">Seating</span></h1>
      <p style="color: #989898;">{{info}}</p>


      <div class="container" v-if="!hasData">

        <h3 class="card-title">unable to load the page</h3>
        <hr>

        <p class="notification">
          Oops! there was a problem with the data we received. <br/>
          Please contact our client service for more support on this:
          <a href="tel:+316 5380 5380">+316 5380 4321</a>.<br/>
          We regret for the inconvenience.
          <router-link to="/">here</router-link>
          to navigate back to landing page.
        </p>

      </div>

      <div v-if="hasData">
        <div v-for="(section) in seatingData.sections" :key="section.id" class="container">

          <h3 style="text-align: left; margin-top: 20px; padding-left: 3%; width: 100%;">
            {{section.name}}</h3>
          <hr style="width: 95%">

          <img src="../assets/screen.svg"
               alt="triangle with all three sides equal"
               height="87" width="100"/>

          <div v-for="row in section.rows" :key="row.id" class="row">
            <div v-for="seat in row.seats" :key="seat.id" class="seat" :class="seat['rank']">
              <span v-if="seat.label">{{seat.label}}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- seat classification legend //-->
      <ul v-if="hasData" class="showcase">
        <li>
          <div class="seat rank1"></div>
          <small>Rank1</small>
        </li>
        <li>
          <div class="seat rank2"></div>
          <small>Rank2</small>
        </li>
        <li>
          <div class="seat rank3"></div>
          <small>Rank3</small>
        </li>
        <li>
          <div class="seat rank4"></div>
          <small>Rank4</small>
        </li>
      </ul>

    </div>


    <div class="credits">
      Copyright © 2021 Hamzeen. H., some rights reserved.
    </div>
  </div>
</template>

<script>
  import layout from "../common/data/layout.json";
  import groups from "../common/data/groups.json";
  import * as jsonUtil from "../common/helpers/json-utils"

export default {
  name: 'CinemaSeating',
  props: {
    msg: String
  },
  data() {
    return {
      info: 'Movie: Fast & Furious 7 | Venue: Amsterdam',
      hasData: false,
      seatingData: {}
    };
  },
  computed: {
    // a computed getters
    /*reversedMessage: function() {
      return this.info.split('').reverse().join('')
    }*/
  },
  methods: {
    loadData: function() {
      this.seatingData = jsonUtil.mapReservationsOnFacility(layout, groups);
      this.hasData = this.seatingData && jsonUtil.containsData(layout);
    }
  },
  mounted: function() {
    this.loadData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
