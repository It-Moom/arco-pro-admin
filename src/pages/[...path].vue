<template>
  <div text-center pos="absolute top-1/2 left-1/2" ml--95px mt--121px>
    <a-result class="result" status="404" subtitle="not found" />
    <div class="operation-row">
      <a-button key="back" type="primary" @click="back">back</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { DEFAULT_ROUTE_NAME } from '@/modules/router/const';

  definePage({
    name: 'NotFound',
    meta: {
      requiresAuth: false,
    },
  });

  const router = useRouter();

  function back() {
    router.push({ name: DEFAULT_ROUTE_NAME });
  }
</script>
