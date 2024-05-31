<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Profile',
    meta: {
      layout: 'admin',
      locale: 'menu.profile',
      requiresAuth: true,
      icon: 'icon-file',
      order: 4,
    },
  });
</script>
