<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4" v-for="card in cards" :key="card">
        <v-card class="mx-auto" color="#26c6da" theme="dark" max-width="400" prepend-icon="mdi-twitter" title="Twitter">

          <v-card-text class="text-h5 py-2">
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
            well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar color="grey-darken-3" :image="card.img"></v-avatar>
              </template>

              <v-list-item-title>{{ card.user }}</v-list-item-title>

              <v-list-item-subtitle>{{ card.position }}</v-list-item-subtitle>

              <template v-slot:append>
                <div class="justify-self-end">
                  <v-btn class="me-1" icon="mdi-heart"></v-btn>
                  <span class="subheading me-2 text-black">256</span>
                  <span class="me-1"></span>
                  <v-btn class="me-1" icon="mdi-share-variant"></v-btn>
                  <span class="subheading text-black">45</span>
                </div>
              </template>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Directory',

  data() {
    return {
      cards: [
        { user: 'Pratik Patel', position: 'Solutions Developer', img: 'https://avatars3.githubusercontent.com/u/34883558?…00&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4' },
        { user: 'Mayank Patel', position: 'Solutions Developer', img: 'https://avatars2.githubusercontent.com/u/27857088?…00&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4' },
        { user: 'Mayur Patel', position: 'Solutions Developer', img: 'https://avatars0.githubusercontent.com/u/55240045?…0&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4' },
        { user: 'Jeff Galbraith', position: 'Solutions Developer', img: 'https://avatars1.githubusercontent.com/u/10262924?…00&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4' },
        { user: 'Pratik Patel', position: 'Solutions Developer', img: 'https://avatars3.githubusercontent.com/u/34883558?…00&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4' },
        { user: 'Mayank Patel', position: 'Solutions Developer', img: 'https://avatars2.githubusercontent.com/u/27857088?…00&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4' },
        { user: 'Mayur Patel', position: 'Solutions Developer', img: 'https://avatars0.githubusercontent.com/u/55240045?…0&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4' },
        { user: 'Jeff Galbraith', position: 'Solutions Developer', img: 'https://avatars1.githubusercontent.com/u/10262924?…00&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4' },
      ]
    }
  }
}
</script>
