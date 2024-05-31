<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Visualization',
    meta: {
      layout: 'admin',
      locale: 'menu.visualization',
      requiresAuth: true,
      icon: 'icon-apps',
      order: 1,
    },
  });
</script>
