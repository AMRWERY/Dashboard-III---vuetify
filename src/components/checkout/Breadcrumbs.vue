<template>
  <div>
    <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',

  data() {
    return {
      items: [
        {
          title: 'Shipping address',
          disabled: false,
        },
        {
          title: 'Payment details',
          disabled: false,
        },
        {
          title: 'Review your order',
          disabled: true,
        },
      ],
    }
  }
}
</script>
