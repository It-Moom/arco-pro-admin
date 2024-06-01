<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Dashboard',
    meta: {
      layout: 'admin',
      locale: 'menu.dashboard',
      icon: 'icon-dashboard',
      order: 0,
    },
  });
</script>
