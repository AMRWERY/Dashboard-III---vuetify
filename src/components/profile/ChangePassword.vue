<template>
  <v-card>
    <h3 class="ma-5 text-purple-lighten-2">Change Password</h3>
    <v-sheet width="700" class="mx-auto">
      <v-form>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field label="Current Password" variant="outlined" type="number" required></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field label="New Password" variant="outlined" type="number" required></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field label="Confirm New Password" variant="outlined" type="number" required></v-text-field>
          </v-col>

        </v-row>
        <v-btn type="submit" class="ma-2" color="purple-lighten-1">Change Password</v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'ChangePassword',
}
</script>
