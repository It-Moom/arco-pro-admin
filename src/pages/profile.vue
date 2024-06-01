<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Profile',
    meta: {
      layout: 'admin',
      locale: 'menu.profile',
      icon: 'icon-file',
      order: 4,
    },
  });
</script>
