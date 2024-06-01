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
      order: 5,
    },
  });
</script>
