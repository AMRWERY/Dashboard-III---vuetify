<template>
  <DashboardCards />
  <TabsCards />
  <TodoTimeline />
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card>
          <v-card-title class="text-purple-lighten-2">Page Visits</v-card-title>
          <v-card-text>
            <v-table hover>
              <thead>
                <tr>
                  <th class="text-left">User ID</th>
                  <th class="text-left">User Name</th>
                  <th class="text-left">Page</th>
                  <th class="text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.page }}</td>
                  <td>{{ item.date }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DashboardCards from "@/components/charts/DashboardCards.vue";
import TabsCards from "@/components/tabs-cards/TabsCards.vue";
import TodoTimeline from "@/components/todo-timeline/TodoTimeline.vue";

export default {
  name: "Home",

  components: { DashboardCards, TabsCards, TodoTimeline },

  data() {
    return {
      desserts: [
        {
          name: "Pratik Patel",
          id: "U0001",
          page: "/login",
          date: "12-10-2023",
        },
        {
          name: "Razvan Stoenescu",
          id: "U0002",
          page: "/dashboard",
          date: "10-10-2023",
        },
        {
          name: "Pratik Patel",
          id: "U0003",
          page: "/map",
          date: "11-10-2023",
        },
        {
          name: "Jeff Galbraith",
          id: "U0004",
          page: "/mail",
          date: "18-10-2023",
        },
        {
          name: "Pratik Patel",
          id: "U0005",
          page: "/profile",
          date: "18-10-2023",
        },
      ],
    };
  },
};
</script>
