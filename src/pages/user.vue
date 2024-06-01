<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'User',
    meta: {
      layout: 'admin',
      locale: 'menu.user',
      icon: 'icon-user',
      order: 7,
    },
  });
</script>
