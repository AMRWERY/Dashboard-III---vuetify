<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card>
          <Area />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card>
          <DataLabels />
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card>
          <Bar />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card>
          <Combo />
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card>
          <Radar />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <v-card>
          <Scatter />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Area from './charts/Area.vue';
import DataLabels from './charts/DataLabels.vue';
import Bar from './charts/Bar.vue';
import Combo from './charts/Combo.vue';
import Radar from './charts/Radar.vue';
import Scatter from './charts/Scatter.vue'

export default {
  name: 'Charts',

  components: { Area, DataLabels, Bar, Combo, Radar, Scatter }
}
</script>
