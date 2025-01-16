<template>
  <UContainer :id="id">
    <div class="flex flex-col items-center py-12 md:py-16">
      <h1 v-if="title || $slots.title" class="text-4xl md:text-5xl font-bold text-center mb-4">
        <slot name="title">{{ title }}</slot>
      </h1>
      
      <p class="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
        <slot name="headline">{{ headline }}</slot>
      </p>

      <div class="w-full">
        <slot>
          <!-- Место для встраиваемого контента -->
        </slot>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface SectionProps {
  title?: string
  headline?: string
  id: string
}

const props = withDefaults(defineProps<SectionProps>(), {
  title: '',
  headline: '',
});
</script>