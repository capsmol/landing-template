<template>
  <div
    class="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <span
      class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
    Example
    </span>
    <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />

    <SwitchColorMode />
  </div>
</template>

<script setup lang="ts">
import ParticlesBg from '@/components/ui/ParticlesBg.vue';
import SwitchColorMode from '@/components/ui/SwitchColorMode.vue';

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

</script>