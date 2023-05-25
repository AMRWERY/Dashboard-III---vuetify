<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer">
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64">
          <v-img src="https://justfields.com/storage/projects/7M5rV059/photo_2023-05-24_12-56-59.jpg" />
        </v-avatar>

        <div>amr@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>

              <v-list lines="two">
                <v-list-subheader class="text-purple-lighten-2">{{ card }}</v-list-subheader>
                <template v-for="message in userMessage" :key="message">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1">
                        <v-img :src="message.img" />
                      </v-avatar>
                    </template>

                    <v-list-item-title>{{ message.user }}</v-list-item-title>

                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Mail',

  data() {
    return {
      drawer: null,
      cards: ['Today', 'Yesterday'],
      userMessage: [
        { user: 'Pratik Patel', img: '	https://avatars2.githubusercontent.com/u/34883558?s=400&v=4' },
        { user: 'Winfield Stapforth', img: 'https://cdn.quasar.dev/img/avatar6.jpg' },
        { user: 'Jeff Galbraith', img: '	https://cdn.quasar.dev/team/jeff_galbraith.jpg' },
        { user: 'Razvan Stoenescu', img: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg' },
      ],
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }
  },
}
</script>
