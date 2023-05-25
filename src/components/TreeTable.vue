<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <h3 class="text-blue">Tree Table</h3>
        <p>A simple Tree Collapsed/Expanded Table</p>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
            </template>

            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Admin"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon], i) in admins" :key="i" :title="title" :prepend-icon="icon"
                :value="title"></v-list-item>
            </v-list-group>

            <v-list-group value="Actions">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Actions"></v-list-item>
              </template>

              <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                :prepend-icon="icon"></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TreeTable',

  data() {
    return {
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ]
    }
  }
}
</script>
