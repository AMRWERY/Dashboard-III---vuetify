<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-container>
          <v-row justify="space-around">
            <v-card width="400">
              <v-img height="200" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" cover
                class="text-white">
                <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                  <template v-slot:prepend>
                    <v-btn icon="$menu"></v-btn>
                  </template>

                  <v-toolbar-title class="text-h6">
                    Messages
                  </v-toolbar-title>

                  <template v-slot:append>
                    <v-btn icon="mdi-dots-vertical"></v-btn>
                  </template>
                </v-toolbar>
              </v-img>

              <v-card-text>
                <div class="font-weight-bold ms-1 mb-2">
                  Today
                </div>

                <v-timeline density="compact" align="start">
                  <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                    size="x-small">
                    <div class="mb-4">
                      <div class="font-weight-normal">
                        <strong>{{ message.from }}</strong> @{{ message.time }}
                      </div>
                      <div>{{ message.message }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
                you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card max-width="400" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" theme="dark">
                  <v-card-title class="text-h5">
                    Unlimited music now
                  </v-card-title>

                  <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and
                    offline.</v-card-subtitle>

                  <v-card-actions>
                    <v-btn variant="text">
                      Listen Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card color="#1F7087" theme="dark">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title class="text-h5">
                        Supermodel
                      </v-card-title>

                      <v-card-subtitle>Foster the People</v-card-subtitle>

                      <v-card-actions>
                        <v-btn class="ms-2" variant="outlined" size="small">
                          START RADIO
                        </v-btn>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="125" rounded="0">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card color="#952175" theme="dark">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title class="text-h5">
                        Halcyon Days
                      </v-card-title>

                      <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                      <v-card-actions>
                        <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="125" rounded="0">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="500">

          <v-container fluid>
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card>
                  <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px" cover>
                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Number 10
          </v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              Share
            </v-btn>

            <v-btn color="orange">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="368">
          <v-card-item title="Florida">
            <template v-slot:subtitle>
              <v-icon icon="mdi-alert" size="18" color="error" class="me-1 pb-1"></v-icon>

              Extreme Weather Alert
            </template>
          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col class="text-h2" cols="6">
                64&deg;F
              </v-col>

              <v-col cols="6" class="text-right">
                <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
              </v-col>
            </v-row>
          </v-card-text>

          <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>

          <v-expand-transition>
            <div v-if="expand">
              <div class="py-2">
                <v-slider v-model="time" :max="6" :step="1" :ticks="labels" class="mx-4" color="primary" density="compact"
                  hide-details show-ticks="always" thumb-size="10"></v-slider>
              </div>

              <v-list class="bg-transparent">
                <v-list-item v-for="item in forecast" :key="item.day" :title="item.day" :append-icon="item.icon"
                  :subtitle="item.temp">
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn @click="expand = !expand">
              {{ !expand ? 'Full Report' : 'Hide Report' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
          </template>

          <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

          <v-card-item>
            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>

              <div class="text-grey ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <div class="px-4">
            <v-chip-group v-model="selection">
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </div>

          <v-card-actions>
            <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card class="mx-auto" color="#26c6da" theme="dark" max-width="400" prepend-icon="mdi-twitter" title="Twitter">
          <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
          </template>

          <v-card-text class="text-h5 py-2">
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
            well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar color="grey-darken-3"
                  image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
              </template>

              <v-list-item-title>Evan You</v-list-item-title>

              <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

              <template v-slot:append>
                <div class="justify-self-end">
                  <v-icon class="me-1" icon="mdi-heart"></v-icon>
                  <span class="subheading me-2">256</span>
                  <span class="me-1">·</span>
                  <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                  <span class="subheading">45</span>
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
  name: 'Cards',

  data() {
    return {
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
      ],
      show: false,
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
      expand: false,
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
      ],
      loading: false,
      selection: 1,
    }
  },

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
