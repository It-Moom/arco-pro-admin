<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Form',
    meta: {
      layout: 'admin',
      locale: 'menu.form',
      icon: 'icon-settings',
      requiresAuth: true,
      order: 3,
    },
  });
</script>
