<template>
  <div h-screen flex relative>
    <div inline-flex items-center absolute top-6 left-5.5 z-1>
      <img src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" alt="logo">
      <div text-5 c="[var(--color-fill-1)] lt-md:[var(--color-text-1)]" mx-1>
        Arco Design Pro
      </div>
    </div>

    <LoginBanner
      w-138 bg-gradient="to-r shape-[163.85deg] from-#1d2129 to-#00308f"
      lt-lg="w-100" lt-md="hidden!"
    />

    <div flex="~ col grow justify-center items-center">
      <div flex="~ grow items-center">
        <LoginForm />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LoginBanner from './components/banner.vue';
  import LoginForm from './components/login-form.vue';
  import Footer from '@/components/footer/index.vue';

  definePage({
    name: 'Login',
    meta: { requiresAuth: false },
  });
</script>
