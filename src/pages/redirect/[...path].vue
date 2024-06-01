<template>
  <div />
</template>

<script lang="ts" setup>
  definePage({
    name: 'Redirect',
    meta: {
      layout: 'admin',
    },
  });

  const router = useRouter();
  const route = useRoute();

  router.replace({
    // @ts-expect-error
    path: route.params.path as string,
  });
</script>
