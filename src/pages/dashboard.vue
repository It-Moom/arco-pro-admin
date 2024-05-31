<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Dashboard',
    meta: {
      layout: 'admin',
      locale: 'menu.dashboard',
      requiresAuth: true,
      icon: 'icon-dashboard',
      order: 0,
    },
  });
</script>
