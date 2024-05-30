<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <component
        v-if="route.meta.ignoreCache"
        :key="route.fullPath"
        :is="Component"
      />
      <keep-alive v-else :include="cacheList">
        <component :key="route.fullPath" :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const tabBarStore = useTabBarStore();

  const cacheList = computed(() => tabBarStore.getCacheList);
</script>

<style scoped lang="less"></style>
