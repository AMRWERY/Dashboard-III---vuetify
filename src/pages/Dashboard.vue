<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <DashboardCard />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <LatestSales />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DashboardCard from "../components/dashboard-charts/DashboardCard.vue";
import LatestSales from "@/components/LatestSales.vue";

export default {
  name: "Dashboard",

  components: { DashboardCard, LatestSales },
};
</script>
