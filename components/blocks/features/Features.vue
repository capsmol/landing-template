<template>
  <Section title="Features" id="features">
    <div class="container mx-auto px-4">
      <div 
        class="grid gap-6 relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card 
          v-for="feature in features" 
          :key="feature.id"
          class="p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col"
        >
          <CardHeader class="flex-none">
            <div class="flex items-center gap-4">
              <div 
                class="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                :class="feature.gradientClass"
              >
                <Icon 
                  :name="feature.icon" 
                  class="text-white !w-[24px] !h-[24px]"
                />
              </div>
              <CardTitle>{{ feature.title }}</CardTitle>
            </div>
          </CardHeader>
          <CardContent class="flex-1">
            {{ feature.description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/blocks/section/Section.vue';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradientClass: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Главное преимущество',
    description: 'Подробное описание главного преимущества вашего продукта или сервиса.',
    icon: 'ph:star-duotone',
    gradientClass: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Скорость работы',
    description: 'Быстрая работа и мгновенный результат для всех ваших задач.',
    icon: 'ph:lightning-duotone',
    gradientClass: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Безопасность',
    description: 'Надежная защита данных и конфиденциальность на высшем уровне.',
    icon: 'ph:shield-check-duotone',
    gradientClass: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Командная работа',
    description: 'Эффективное взаимодействие и совместная работа в команде.',
    icon: 'ph:users-duotone',
    gradientClass: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Аналитика',
    description: 'Подробная статистика и аналитика для принятия решений.',
    icon: 'ph:chart-line-up-duotone',
    gradientClass: 'bg-gradient-to-br from-violet-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Интеграции',
    description: 'Легкая интеграция с популярными сервисами и платформами.',
    icon: 'ph:plugs-connected-duotone',
    gradientClass: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  }
];
</script>
