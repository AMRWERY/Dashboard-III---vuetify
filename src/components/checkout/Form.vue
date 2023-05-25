<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-sheet width="700" class="mx-auto">
        <v-form @submit.prevent="submitForm">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="First Name *" variant="outlined" type="text" required
                v-model.trim="firstName"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label=" Last Name *" variant="outlined" type="text" required
                v-model.trim="lastName"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field label="Address Line 1 *" variant="outlined" type="text" required
                v-model.trim="addressLineOne"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Address Line 2 *" variant="outlined" type="email" required
                v-model.trim="addressLineTwo"></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-text-field label="City *" variant="outlined" type="text" required v-model.trim="city"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field label="State" variant="outlined" type="text" required v-model.trim="state"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Zip Code" variant="outlined" type="number" required
                v-model.trim="zipCode"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Country *" variant="outlined" type="text" v-model="country"></v-text-field>
            </v-col>
            <v-col>
              <v-checkbox
              v-model="checkbox"
              label="Use this address for payment details"
              required
            ></v-checkbox>
            </v-col>
          </v-row>
          <v-btn type="submit" class="ma-2" color="purple-lighten-1">Next</v-btn>
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      firstName: '',
      lastName: '',
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      country: '',
      zipCode: null,
      checkbox: false
    };
  },
};
</script>
