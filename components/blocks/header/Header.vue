<template>
  <div class="relative">
    <!-- Desktop Navigation -->
    <div
      :class="cn(
        'hidden md:flex w-[500px] fixed top-8 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-between',
        props.class
      )"
    >
      <a href="/" class="text-xl font-bold">Logo</a>
      
      <div class="flex items-center space-x-6">
        <a
          v-for="(navItem, idx) in navItems"
          :key="idx"
          :href="navItem.link"
          class="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          @click.prevent="scrollToSection(navItem.link)"
        >
          <span class="text-sm">{{ navItem.name }}</span>
        </a>
        
        <RainbowButton class="rounded-full">
          {{ buttonText }}
        </RainbowButton>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden fixed top-0 left-0 right-0 z-50">
      <div class="flex items-center justify-between px-4 py-3 bg-white dark:bg-black border-b border-neutral-200 dark:border-white/[0.2]">
        <a href="/" class="text-xl font-bold">Logo</a>
        <button 
          @click="isOpen = !isOpen"
          class="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          <div class="w-6 h-6 flex flex-col justify-center space-y-1.5">
            <span :class="['block w-6 h-0.5 bg-black dark:bg-white transition-transform', isOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['block w-6 h-0.5 bg-black dark:bg-white transition-opacity', isOpen ? 'opacity-0' : '']"></span>
            <span :class="['block w-6 h-0.5 bg-black dark:bg-white transition-transform', isOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div
          v-show="isOpen"
          class="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-neutral-200 dark:border-white/[0.2] py-4"
        >
          <div class="flex flex-col space-y-4 px-4">
            <a
              v-for="(navItem, idx) in navItems"
              :key="idx"
              :href="navItem.link"
              class="py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              @click.prevent="scrollToSection(navItem.link)"
            >
              <span class="flex items-center">
                <span v-if="navItem.icon" class="mr-3">{{ navItem.icon }}</span>
                {{ navItem.name }}
              </span>
            </a>
            <button class="w-full text-center border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <span class="text-white">{{ buttonText }}</span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import RainbowButton from '~/components/ui/RainbowButton.vue';

interface NavItem {
  name: string
  link: string
  icon?: any
}

const props = defineProps<{
  navItems: NavItem[]
  buttonText: string
  class?: string
}>()

const isOpen = ref<boolean>(false)

const scrollToSection = (link: string) => {
  // Закрываем мобильное меню
  isOpen.value = false
  
  // Убираем # из начала ссылки если есть
  const targetId = link.replace(/^#/, '')
  const element = document.getElementById(targetId)
  
  if (element) {
    // Добавляем небольшой отступ сверху
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>