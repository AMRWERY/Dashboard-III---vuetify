<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
          <v-card-text>
            <v-text-field :loading="loading" density="compact" variant="solo" label="Search Product"
              append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" v-for="item in products" :key="item">
        <v-card class="mx-auto" max-width="400">
          <v-img class="align-end text-white" height="200" :src="item.img" cover>
            <v-card-title>{{ item.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            <v-chip>
              ${{ item.price }}
            </v-chip>
          </v-card-subtitle>

          <v-card-text>
            <div>Amazing Product to Buy</div>
          </v-card-text>

          <v-card-actions class="float-right">
            <v-btn color="orange" icon="mdi mdi-cart" />

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductCatalogues',

  data() {
    return {
      loaded: false,
      loading: false,
      products: [
        { img: 'https://justfields.com/storage/projects/7M5rV059/shirt04.jpg', title: 'Black Shirt', price: 30 },
        { img: 'https://justfields.com/storage/projects/7M5rV059/bag00.jpg', title: 'Hand Bag', price: 15 },
        { img: 'https://justfields.com/storage/projects/7M5rV059/jacket02.jpg', title: 'Jacket', price: 50 },
        { img: 'https://justfields.com/storage/projects/7M5rV059/jaens01.jpg', title: 'Jeans', price: 70 },
        { img: 'https://justfields.com/storage/projects/7M5rV059/shoes08.jpg', title: 'Shoes', price: 60 },
        { img: 'https://justfields.com/storage/projects/7M5rV059/t-shirt010.jpg', title: 'T-Shirts', price: 30 },
        { img: 'https://justfields.com/storage/projects/7M5rV059/pant06.jpg', title: 'Pants', price: 45 },
      ]
    }
  },

  methods: {
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  }
}
</script>
