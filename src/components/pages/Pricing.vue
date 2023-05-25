<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-toolbar border dark prominent image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-toolbar-title>Pricing Page</v-toolbar-title>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi mdi-view-dashboard</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi mdi-currency-usd</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi mdi-lock</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col class="text-center">
        <h1>Pick the best plan for you</h1>
        <p>You have Free Unlimited Updates and Premium Support on each package</p>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="3" v-for="card in cards" :key="card">
        <v-card width="300" class="text-center ma-5" :color="card.color">
          <v-card-subtitle class="ma-3">{{ card.title }}</v-card-subtitle>
          <v-card-title>{{ card.price }}</v-card-title>
          <v-card-text>{{ card.description }}</v-card-text>
          <v-card-actions>
            <v-btn variant="outlined">
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Pricing',

  data() {
    return {
      cards: [
        { title: 'Basic', price: '$0', description: 'This is good if your company size is between 2 and 10 Persons.', color: 'red' },
        { title: 'Small Company', price: '$25', description: 'This is good if your company size is between 2 and 10 Persons.', color: 'blue' },
        { title: 'Extended', price: '$250', description: 'This is good if your company size is between 2 and 10 Persons.', color: 'yellow' },
        { title: 'Extra Pack', price: '$750', description: 'This is good if your company size is between 2 and 10 Persons.', color: 'green' },
      ]
    }
  }
}
</script>
