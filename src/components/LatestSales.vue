<template>
  <v-row dense>
    <v-col>
      <v-card-title class="text-h5 text-purple-lighten-2"><v-icon>mdi mdi-cart-outline</v-icon> Latest Sales
      </v-card-title>
      <v-card-subtitle>
        Monitoring Your products. Tracking sales, and shipping status here.
      </v-card-subtitle>
    </v-col>
  </v-row>
  <v-row dense>
    <v-col>
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-left">
              Products
            </th>
            <th class="text-left">
              Buyer
            </th>
            <th class="text-left">
              Total
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Stock
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in table" :key="item.name">
            <td class="py-2">
              <img :src="item.productImg" />
            </td>
            <td>{{ item.buyer }}</td>
            <td>${{ item.total }}</td>
            <td>
              <v-chip variant="outlined" color="red-lighten-1">
                {{ item.status }}
              </v-chip>
            </td>
            <td>{{ item.stock }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
  <v-row dense>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
      <Tabs />
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
      <Carousel />
    </v-col>
  </v-row>
</template>

<script>
import Tabs from './tabs-cards/Tabs.vue';
import Carousel from '../layouts/Carousel.vue'

export default {
  name: "LatestSales",

  components: { Tabs, Carousel },

  data() {
    return {
      table: [
        {
          productImg: 'https://justfields.com/storage/projects/7M5rV059/bag00.jpg',
          buyer: 'Pratik Patel',
          total: '300,00',
          status: 'Canceled',
          stock: '14 / 30'
        },
        {
          productImg: 'https://justfields.com/storage/projects/7M5rV059/laptop.jpg',
          buyer: 'Mayank Patel',
          total: '230,00',
          status: 'Sent',
          stock: '25 / 70'
        },
        {
          productImg: 'https://justfields.com/storage/projects/7M5rV059/IMG_7181123.jpg',
          buyer: 'Mayur Patel',
          total: '34,00',
          status: 'Pending',
          stock: '35 / 50'
        },
        {
          productImg: 'https://justfields.com/storage/projects/7M5rV059/download.jpg',
          buyer: 'Jeff Galbraith',
          total: '208,00',
          status: 'Paid',
          stock: '18 / 33'
        },
      ],
    }
  },
};
</script>

<style scoped>
img {
  border-radius: 100%;
  height: 50px;
  width: 50px;
}
</style>
