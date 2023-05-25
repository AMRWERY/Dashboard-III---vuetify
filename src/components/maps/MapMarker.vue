<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card>
          <GMapMap :center="{ lat: 29.9602, lng: 31.2569 }" :zoom="7" map-type-id="terrain"
            style="width: 100vw; height: 900px">
            <GMapMarker v-for="(m, index) in markers" :key="index" :position="m.position" :clickable="true"
              :draggable="true">
              <GMapInfoWindow :opened="true">
                <div>I'm here 😁'
                  <MyComponent />
                </div>
              </GMapInfoWindow>
            </GMapMarker>
          </GMapMap>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MapMarker',

  data() {
    return {
      markers: [
        {
          position: {
            lat: 29.9602, lng: 31.2569
          },
        }
      ]
    }
  },
}
</script>
