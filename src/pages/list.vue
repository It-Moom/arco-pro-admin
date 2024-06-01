<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'List',
    meta: {
      layout: 'admin',
      locale: 'menu.list',
      icon: 'icon-list',
      order: 2,
    },
  });
</script>
