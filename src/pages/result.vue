<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Result',
    meta: {
      layout: 'admin',
      locale: 'menu.result',
      icon: 'icon-check-circle',
      requiresAuth: true,
      order: 5,
    },
  });
</script>
