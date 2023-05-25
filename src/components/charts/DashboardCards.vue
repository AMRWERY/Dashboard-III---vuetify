<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card color="blue-lighten-2" class="py-2">
          <Line />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card color="red-lighten-3" class="py-2">
          <Column />
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card color="light-green-lighten-2" class="py-2">
          <Mixed />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Line from "./Line.vue";
import Column from "./Column.vue";
import Mixed from "./Mixed.vue";

export default {
  name: "DashboardCards",

  components: { Line, Column, Mixed },
};
</script>
