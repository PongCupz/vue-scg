<template>
  <div id="ggmap">
    <div class="container-fluid">
      <div class="row page-titles">
        <div class="col-md-6 col-8 align-self-center">
          <h3 class="text-themecolor m-b-0 m-t-0">Google Map</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active" id="home" role="tabpanel">
                  <div class="card-body">
                    <div>
                      <div>
                        <div class="form-group row">
                          <label>Select Route</label>
                        </div>
                        <div class="form-group row">
                          <label>Source</label>
                          <select
                            class="custom-select col-12"
                            id="inlineFormCustomSelect"
                            v-model="selected_source"
                          >
                            <option
                              v-for="item in option"
                              :value="item.id"
                              :key="item.id"
                            >{{item.name}}</option>
                          </select>
                        </div>
                        <div class="form-group row">
                          <label>Destination</label>

                          <select
                            class="custom-select col-12"
                            id="inlineFormCustomSelect"
                            v-model="selected_destination"
                          >
                            <option
                              v-for="item in option"
                              :value="item.id"
                              :key="item.id"
                            >{{item.name}}</option>
                          </select>
                        </div>

                        <div class="form-group row m-b-0">
                          <button
                            @click="addMarker"
                            class="btn btn-info waves-effect waves-light m-t-10"
                          >Ok</button>
                        </div>

                        <br />
                      </div>
                      <br />
                      <gmap-map
                        :center="center"
                        :zoom="12"
                        style="width:100%;  height: 400px;"
                        ref="map"
                      >
                        <gmap-marker
                          :key="index"
                          v-for="(m, index) in markers"
                          :position="m.position"
                          @click="center=m.position"
                        ></gmap-marker>
                      </gmap-map>

                      <div id="map"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ggmap',
  data () {
    return {
      center: { lat: 13.7455018, lng: 100.5345962 },
      markers: [],
      option: [],
      selected_source: null,
      selected_destination: null,
      directionsDisplay: null
    }
  },
  mounted () {
    axios.get(process.env.ROOT_API + '/ggmap').then(response => {
      this.option = response.data
      this.selected_source = response.data[0].id
      this.selected_destination = response.data[1].id
    })
  },
  methods: {
    addMarker () {
      var source = this.selected_source
      function findSource (item) {
        return item.id === source
      }
      var destination = this.selected_destination
      function findDestination (item) {
        return item.id === destination
      }
      const src = {
        lat: Number(this.option[this.option.findIndex(findSource)].lat),
        lng: Number(this.option[this.option.findIndex(findSource)].lng)
      }
      const dsc = {
        lat: Number(this.option[this.option.findIndex(findDestination)].lat),
        lng: Number(this.option[this.option.findIndex(findDestination)].lng)
      }

      this.calculateAndDisplayRoute(src, dsc)
    },
    calculateAndDisplayRoute (start, destination) {
      var directionsService = new google.maps.DirectionsService()
      if (this.directionsDisplay == null) {
        this.directionsDisplay = new google.maps.DirectionsRenderer()
      }
      var directionsDisplay = this.directionsDisplay
      directionsDisplay.setMap(null)
      directionsDisplay.setMap(this.$refs.map.$mapObject)

      directionsService.route(
        {
          origin: start,
          destination: destination,
          travelMode: 'DRIVING'
        },
        function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response)
          } else {
            window.alert('Directions request failed due to ' + status)
          }
        }
      )
    }
  }
}
</script>

<style scoped>
#map {
  width: 500px;
  height: 400px;
  margin-top: 10px;
}
</style>
