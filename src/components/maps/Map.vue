<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card>
          <GMapMap :center="{ lat: 29.9602, lng: 31.2569 }" :zoom="7" map-type-id="terrain"
            style="width: 100vw; height: 900px">
          </GMapMap>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Map',

  data() {
    return {
      center: { lat: 29.9602, lng: 31.2569 },
    }
  }
}
</script>
