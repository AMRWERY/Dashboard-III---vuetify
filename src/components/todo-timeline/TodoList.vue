<template>
  <v-card color="#385F73" theme="dark">
    <v-card-title class="text-h5 text-purple-lighten-2"><v-icon>mdi mdi-check-all</v-icon> To do list
    </v-card-title>
    <v-card-subtitle class="ml-5">All Your to do list</v-card-subtitle>
    <v-card-item>
      <div>
        <v-list lines="two">
          <v-list-item v-for="item in items" :key="item">
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
              </v-list-item-action>
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>

            <v-list-item-subtitle>
              {{ item.subtitle }}
            </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn icon="mdi mdi-message-reply-text-outline"></v-btn>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {
      items: [
        { title: "Task item 1", subtitle: "Task item 1 Desc" },
        { title: "Task item 2", subtitle: "Task item 2 Desc" },
        { title: "Task item 3", subtitle: "Task item 3 Desc" },
        { title: "Task item 4", subtitle: "Task item 4 Desc" },
        { title: "Task item 5", subtitle: "Task item 5 Desc" },
        { title: "Task item 6", subtitle: "Task item 6 Desc" },
        { title: "Task item 7", subtitle: "Task item 7 Desc" },
      ],
    };
  },
};
</script>
