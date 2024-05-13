<template>
  <a-carousel class="h-full" animation-name="fade">
    <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
      <div :key="item.slogan" h-full flex="~ col justify-center items-center">
        <div class="fw-500 text-xl c-[var(--color-fill-1)]">{{ item.slogan }}</div>
        <div class="text-sm c-[var(--color-text-3)] lh-5.5 mt-2">{{ item.subSlogan }}</div>
        <img w-80 mt-7.5 :src="item.image">
      </div>
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
  import bannerImage from '@/assets/images/login-banner.png';

  const { t } = useI18n();
  const carouselItem = computed(() => [
    {
      slogan: t('login.banner.slogan1'),
      subSlogan: t('login.banner.subSlogan1'),
      image: bannerImage,
    },
    {
      slogan: t('login.banner.slogan2'),
      subSlogan: t('login.banner.subSlogan2'),
      image: bannerImage,
    },
    {
      slogan: t('login.banner.slogan3'),
      subSlogan: t('login.banner.subSlogan3'),
      image: bannerImage,
    },
  ]);
</script>
