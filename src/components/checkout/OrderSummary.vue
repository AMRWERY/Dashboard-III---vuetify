<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="text-center text-purple-lighten-2">
            <v-icon>mdi mdi-cart-outline</v-icon>
            Order Summary
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list :items="items" item-props lines="three">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h4 class="float-right">Total: <span class="text-blue">$368.43</span></h4>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'OrderSummary',

  data() {
    return {
      items: [
        {
          prependAvatar: 'https://justfields.com/storage/projects/7M5rV059/bag00.jpg',
          title: 'Hand Bag',
          subtitle: '$45.99',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://justfields.com/storage/projects/7M5rV059/jacket02.jpg',
          title: 'Jacket',
          subtitle: '$130.45',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://justfields.com/storage/projects/7M5rV059/pant03.jpg',
          title: 'Pant',
          subtitle: '$65.99',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://justfields.com/storage/projects/7M5rV059/pant03.jpg',
          title: 'Shoes',
          subtitle: '$55.80',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://justfields.com/storage/projects/7M5rV059/shirt04.jpg',
          title: 'Shirt',
          subtitle: '$70.20',
        },
      ],
    }
  }
}
</script>
