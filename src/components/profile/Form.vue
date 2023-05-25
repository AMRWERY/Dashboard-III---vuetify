<template>
  <v-card>
    <h3 class="ma-5 text-purple-lighten-2">Edit Profile</h3>
    <p class="ma-5">Complete your profile</p>
    <v-sheet width="700" class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="User Name" variant="outlined" type="text" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Email Address" variant="outlined" type="email" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label=" First Name" variant="outlined" type="text" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label=" Last Name" variant="outlined" type="text" required></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-textarea label="Address" variant="outlined" type="text" required></v-textarea>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="City" variant="outlined" type="text" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Postal Code" variant="outlined" type="number"></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea label="About" variant="outlined" type="text" required></v-textarea>
          </v-col>
        </v-row>
        <v-btn type="submit" class="ma-2" color="purple-lighten-1">Update User Info</v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'Form',
}
</script>
