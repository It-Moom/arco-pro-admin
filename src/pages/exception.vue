<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Exception',
    meta: {
      layout: 'admin',
      locale: 'menu.exception',
      requiresAuth: true,
      icon: 'icon-exclamation-circle',
      order: 6,
    },
  });
</script>
