<template>
  <v-card height="100%">
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="center"
      stacked
    >
      <v-tab value="one">
        <v-icon>mdi mdi-card-account-phone-outline</v-icon>
        Contact</v-tab
      >
      <v-tab value="two">
        <v-badge :content="5" color="error">
          <v-icon>mdi mdi-message-text-outline</v-icon>
        </v-badge>
        Message
      </v-tab>
      <v-tab value="three">
        <v-badge :content="5" color="error">
          <v-icon>mdi mdi-bell-outline</v-icon>
        </v-badge>
        Notification
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="one">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-list lines="one">
                <v-list-item
                  v-for="folder in folders"
                  :key="folder.title"
                  :title="folder.title"
                  :subtitle="folder.subtitle"
                  :prepend-avatar="folder.prependAvatar"
                  link
                >
                  <template v-slot:append>
                    <v-btn
                      color="blue-lighten-1"
                      icon="mdi mdi-message-reply-text-outline"
                      variant="text"
                    ></v-btn>
                    <v-btn
                      color="red-lighten-1"
                      icon="mdi mdi-email-outline"
                      variant="text"
                    ></v-btn>
                    <v-btn
                      color="green-lighten-1"
                      icon="mdi mdi-phone"
                      variant="text"
                    ></v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item value="two">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-list>
                <v-list-item
                  v-for="folder in messages"
                  :key="folder.title"
                  :title="folder.title"
                  :subtitle="folder.subtitle"
                  :prepend-avatar="folder.prependAvatar"
                  link
                >
                  <template v-slot:append>
                    <v-list-item-title>{{ folder.time }}</v-list-item-title>
                  </template>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item value="three">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-list density="compact">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :value="item"
                  active-color="primary"
                >
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>

                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
export default {
  name: "Tabs",

  data() {
    return {
      tab: null,
      folders: [
        {
          subtitle: "Developer",
          title: "Pratik Patel",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        },
        {
          subtitle: "Developer",
          title: "Razvan Stoenescu",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        },
        {
          subtitle: "Developer",
          title: "Jeff Galbraith",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        },
        {
          subtitle: "Administrator",
          title: "Brunhilde Panswick",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        },
        {
          subtitle: "Administrator",
          title: "Winfield Stapforth",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        },
      ],
      messages: [
        {
          subtitle:
            "-- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
          title: "Pratik Patel",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          time: "10:42 PM",
        },
        {
          subtitle:
            "-- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
          title: "Pratik Patel",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          time: "11:17 AM",
        },
        {
          subtitle:
            "-- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
          title: "Pratik Patel",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          time: "05:17 AM",
        },
        {
          subtitle:
            "-- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
          title: "Pratik Patel",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          time: "02:40 PM",
        },
        {
          subtitle:
            "-- I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?",
          title: "Pratik Patel",
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          time: "07:32 PM",
        },
      ],
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi mdi-chat-alert-outline" },
        { text: "Messages", icon: "mdi mdi-message-text-outline" },
        { text: "Mails", icon: "mdi mdi-mailbox-open-outline" },
      ],
    };
  },
};
</script>
