<template>
  <Section title="Pricing" id="pricing">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Карточка -->
        <Card class="overflow-hidden">
          <div class="flex flex-col p-8">
            <!-- Заголовок -->
            <div class="mb-6">
              <h3 class="text-2xl font-bold mb-2">Пожизненный доступ</h3>
              <p class="text-muted-foreground">Получите полный доступ ко всем функциям навсегда</p>
            </div>

            <!-- Цена -->
            <div class="flex items-baseline mb-8">
              <span class="text-4xl font-bold">$299</span>
              <span class="text-muted-foreground ml-2">USD</span>
            </div>

            <!-- Преимущества -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <Icon name="ph:check-circle-fill" class="w-5 h-5 text-green-500 mr-3" />
                <span>Все функции платформы</span>
              </li>
              <li class="flex items-center">
                <Icon name="ph:check-circle-fill" class="w-5 h-5 text-green-500 mr-3" />
                <span>Пожизненные обновления</span>
              </li>
              <li class="flex items-center">
                <Icon name="ph:check-circle-fill" class="w-5 h-5 text-green-500 mr-3" />
                <span>Приоритетная поддержка</span>
              </li>
              <li class="flex items-center">
                <Icon name="ph:check-circle-fill" class="w-5 h-5 text-green-500 mr-3" />
                <span>Доступ к закрытому сообществу</span>
              </li>
              <li class="flex items-center">
                <Icon name="ph:check-circle-fill" class="w-5 h-5 text-green-500 mr-3" />
                <span>Персональные консультации</span>
              </li>
            </ul>

            <!-- Кнопка -->
            <RainbowButton class="w-full justify-center">
              <span class="flex items-center">
                Получить доступ
                <Icon name="ph:arrow-right" class="ml-2 w-4 h-4" />
              </span>
            </RainbowButton>

            <!-- Дополнительная информация -->
            <p class="text-sm text-muted-foreground text-center mt-4">
              Единоразовый платеж, без подписки
            </p>
          </div>
        </Card>

        <!-- Гарантия -->
        <div class="mt-8 text-center">
          <p class="text-sm text-muted-foreground">
            7 дней гарантия возврата денег, если вас что-то не устроит
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/blocks/section/Section.vue';
import { Card } from '@/components/ui/card';
import RainbowButton from '@/components/ui/RainbowButton.vue';
</script>

<style scoped>
.card {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
}
</style>