<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" width="270" color="teal-lighten-5">
      <v-list>
        <v-list-item v-for="link in links" :key="link" link :to="link.route">
          <template v-slot:prepend>
            <v-icon>{{ link.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>

        <v-list-group value="Maps">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Maps" prepend-icon="mdi mdi-map-search-outline"></v-list-item>
          </template>

          <v-list-item v-for="page in maps" :key="page" :title="page.title" :prepend-icon="page.icon" link
            :to="page.route"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="indigo-lighten-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer />
      <v-btn icon="mdi mdi-github" />
      <v-btn icon="mdi mdi-heart-outline" />
      <v-btn>
        <v-badge :content="5" color="red-lighten-1">
          <v-menu width="350">
            <template v-slot:activator="{ props }">

              <v-icon icon="mdi mdi-bell-ring-outline" size="x-large" v-bind="props"></v-icon>
            </template>
            <v-list :items="items" item-props lines="one">
              <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
              </template>
            </v-list>
          </v-menu>
        </v-badge>
      </v-btn>
      <v-btn icon="mdi mdi-account-circle-outline" to="/user-profile" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      drawer: false,
      links: [
        { title: "Dashboard", icon: "mdi mdi-monitor-dashboard", route: "/" },
        { title: "CRM Dashboard", icon: "mdi mdi-view-dashboard", route: "/dashboard" },
        { title: "Mail", icon: "mdi mdi-email-outline", route: "/mail" },
        {
          title: "Directory",
          icon: "mdi mdi-subdirectory-arrow-right",
          route: "/directory",
        },
        { title: "Charts", icon: "mdi mdi-chart-line", route: "/charts" },
        { title: "Footer", icon: "mdi mdi-page-layout-footer", route: "/footer" },
        { title: "Card Header", icon: "mdi mdi-page-layout-header", route: "/card-header" },
        { title: "Cards", icon: "mdi mdi-card-outline", route: "/cards" },
        { title: "Tables", icon: "mdi mdi-table", route: "/tables" },
        { title: "Checkout", icon: "mdi mdi-check-circle-outline", route: "/checkout" },
        {
          title: "Product Catalogues",
          icon: "mdi mdi-cart-outline",
          route: "/product-catalogues",
        },
      ],
      maps: [
        { title: "Map", icon: "mdi mdi-map", route: "/map" },
        { title: "Map Marker", icon: "mdi mdi-map-marker-radius", route: "/map-marker" },
      ],
      items: [
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
};
</script>
