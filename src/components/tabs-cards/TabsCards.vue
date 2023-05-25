<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <Tabs />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <Card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Tabs from "./Tabs.vue";
import Card from "./Card.vue";

export default {
  name: "TabsCards",

  components: { Tabs, Card },
};
</script>
