<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <TodoList />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
        <Timeline />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoList from "./TodoList.vue";
import Timeline from "./Timeline.vue";

export default {
  name: "TodoTimeline",

  components: { TodoList, Timeline },
};
</script>
