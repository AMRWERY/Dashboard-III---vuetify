<template>
  <h4 class="ma-4 text-purple-lighten-2">Basic</h4>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Dessert (100g serving)
        </th>
        <th class="text-left">
          Calories
        </th>
        <th class="text-left">
          Fat (g)
        </th>
        <th class="text-left">
          Carbs (g)
        </th>
        <th class="text-left">
          Protein (g)
        </th>
        <th class="text-left">
          Sodium (mg)
        </th>
        <th class="text-left">
          Calcium (%)
        </th>
        <th class="text-left">
          Iron (%)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.fat }}</td>
        <td>{{ item.carbs }}</td>
        <td>{{ item.protein }}</td>
        <td>{{ item.sodium }}</td>
        <td>{{ item.calcium }}%</td>
        <td>{{ item.iron }}%</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: 'Basic',

  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6,
          carbs: 24,
          protein: 4,
          sodium: 87,
          calcium: 14,
          iron: 1
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9,
          carbs: 37,
          protein: 43,
          sodium: 129,
          calcium: 8,
          iron: 1
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16,
          carbs: 23,
          protein: 4.3,
          sodium: 129,
          calcium: 6,
          iron: 7
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.4,
          sodium: 413,
          calcium: 3,
          iron: 8
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: 7,
          iron: 16
        },
      ],
    }
  }
}
</script>
