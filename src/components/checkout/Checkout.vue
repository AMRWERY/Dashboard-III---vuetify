<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="8">
        <Breadcrumbs />
        <Form />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <OrderSummary />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
import Form from './Form.vue';
import OrderSummary from './OrderSummary.vue';

export default {
  name: 'Checkout',

  components: { OrderSummary, Breadcrumbs, Form }
}
</script>
