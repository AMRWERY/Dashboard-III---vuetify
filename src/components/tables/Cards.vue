<template>
  <h4 class="ma-4 text-purple-lighten-2">Custom Grid View</h4>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="6" lg="4" v-for="card in cards" :key="card">
      <v-card color="#952175" theme="dark" >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">
              {{ card.title }}
            </v-card-title>

            <v-card-subtitle>{{card.subtitle}}</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" icon="mdi mdi-facebook" variant="text"></v-btn>
              <v-btn class="ms-2" icon="mdi mdi-twitter" variant="text"></v-btn>
              <v-btn class="ms-2" icon="mdi mdi-instagram" variant="text"></v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="card.img"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'Cards',

  data() {
    return {
      cards: [
        {img: 'https://avatars3.githubusercontent.com/u/34883558?…00&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4', title: 'Pratik Patel', subtitle: 'Solutions Developer'},
        {img: 'https://avatars2.githubusercontent.com/u/27857088?…00&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4', title: 'Mayank Patel', subtitle: 'Solutions Developer'},
        {img: '	https://avatars0.githubusercontent.com/u/55240045?…0&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4', title: 'Mayur Patel', subtitle: 'Solutions Developer'},
        {img: '	https://avatars1.githubusercontent.com/u/10262924?…00&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4', title: 'Jeff Galbraith', subtitle: 'Solutions Developer'},
      ]
    }
  }
}
</script>
