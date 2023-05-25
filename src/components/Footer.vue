<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card>
          <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
            <div>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
            </div>

            <div class="pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
              ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
              dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
              ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>

            <v-divider></v-divider>

            <div>
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </div>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-card>
          <v-footer class="d-flex flex-column">
            <div class="bg-teal d-flex w-100 align-center px-4">
              <strong>Get connected with us on social networks!</strong>

              <v-spacer></v-spacer>

              <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
            </div>

            <div class="px-4 py-2 bg-black text-center w-100">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </div>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>
