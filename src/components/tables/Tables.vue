<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card>
          <Basic />
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card>
          <Density />
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card>
          <Height />
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card>
          <FixedHeader />
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <Cards />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Basic from './Basic.vue';
import Density from './Density.vue';
import Height from './Height.vue';
import FixedHeader from './FixedHeader.vue';
import Cards from './Cards.vue'

export default {
  name: 'Tables',

  components: { Basic, Density, Height, FixedHeader, Cards }
}
</script>
