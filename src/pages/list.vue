<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'List',
    meta: {
      locale: 'menu.list',
      requiresAuth: true,
      icon: 'icon-list',
      order: 2,
    },
  });
</script>
