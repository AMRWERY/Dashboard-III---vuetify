<template>
  <v-row dense>
    <v-col>
      <v-card-title class="text-h5 text-purple-lighten-2"><v-icon>mdi mdi-chart-bar</v-icon> Product Sales Stats
      </v-card-title>
    </v-col>
  </v-row>
  <v-row dense>
    <v-col cols="12" xs="12" sm="12" md="6" lg="7">
      <v-card>
        <Column />
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="5">
      <v-card>
        <Line />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Column from "./Column.vue";
import Line from "./Line.vue";

export default {
  name: "DashboardCard",

  components: { Column, Line },
};
</script>
