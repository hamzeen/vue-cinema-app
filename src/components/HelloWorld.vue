<template>
  <div>
    <div class="movie-container hello">
      <h1>Cinema <span class="text-indigo-600">Seating</span></h1>
      <p style="color: #989898;">{{info}}</p>

      <div v-for="(section) in viewerMap.sections" :key="section.id" class="container">

        <h3 style="text-align: left; margin-top: 20px; padding-left: 3%; width: 100%;">
          {{section.name}}</h3>
        <hr style="width: 95%">

        <img  src="../assets/screen.svg"
              alt="triangle with all three sides equal"
              height="87" width="100" />

        <div v-for="row in section.rows" :key="row.id" class="row">
          <div v-for="seat in row.seats" :key="seat.id"  class="seat" :class="seat['rank']">
            <span v-if="seat.label">{{seat.label}}</span>
          </div>
        </div>
      </div>

      <!-- seat classification legend //-->
      <ul class="showcase">
        <li>
          <div class="seat"></div>
          <small>Available</small>
        </li>
        <li>
          <div class="seat occupied"></div>
          <small>Occupied</small>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      info: 'Movie: Fast & Furious 7 | Venue: Amsterdam'
    };
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      return this.hello.split('').reverse().join('')
    },
    viewerMap: function () {
      return jsonUtil.mapReservationsOnFacility(layout, groups)
    }

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
