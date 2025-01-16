<template>
  <div>
    <Header :navItems="[
      { name: 'Features', link: '#features' },
      { name: 'Pricing', link: '#pricing' },
    ]" 
      buttonText="Get Started" />
    <Hero />
    <Features />
    <Pricing />
    <Faq />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/blocks/header/Header.vue';
import Hero from '@/components/blocks/hero/Hero.vue';
import Features from '@/components/blocks/features/Features.vue';
import Pricing from '@/components/blocks/pricing/Pricing.vue';
import Faq from '@/components/blocks/faq/Faq.vue';
</script>