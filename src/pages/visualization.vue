<template>
  <RouterView />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Visualization',
    meta: {
      layout: 'admin',
      locale: 'menu.visualization',
      icon: 'icon-apps',
      order: 1,
    },
  });
</script>
