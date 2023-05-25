<template>
  <v-container fluid class="pa-5 ma-5">
    <v-row dense align="center" justify="center">
      <v-col cols="12" xs="12" sm="8" md="4" lg="4" class="d-flex justify-center align-center">
        <v-card width="400" class="ma-5 elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="text-center">Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi mdi-account" label="Username" type="text" variant="outlined"></v-text-field>
              <v-text-field prepend-icon="mdi mdi-lock" label="Password" type="password"
                variant="outlined"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login'
}
</script>
