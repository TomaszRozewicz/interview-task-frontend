<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'
import IconSort from '@/components/IconSort.vue'

interface AppListing {
  items: string[]
  label?: string
  activeItem?: string
  isClickable?: boolean
  isSortIcon?: boolean
}

withDefaults(defineProps<AppListing>(), {
  label: '',
  activeItem: '',
  isClickable: true,
  isSortIcon: false,
})
defineEmits<{
  (e: 'onItemClick', v: string): void
}>()
</script>

<template>
  <div class="app-listing">
    <div
      v-if="label"
      class="app-listing__label"
    >
      <span class="pe-1">
        {{ label }}
      </span>
      <IconSort v-if="isSortIcon" />
    </div>
    <div>
      <ul class="app-listing__list">
        <li
          v-for="(item, key) in items"
          :key="key"
          :class="`app-listing__item ${isClickable ? 'app-listing__item--clickable' : ''} ${activeItem === item ? 'text-primary' : ''}`"
          @click="isClickable ? $emit('onItemClick', item) : ''"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-listing {
  &__label {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-gray-300);
    line-height: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
  }

  &__list {
    padding: 0;
    margin: 0;
    overflow-y: auto;
  }

  &__item {
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-gray-200);
    font-size: 12px;
    line-height: 16px;
    padding: 20px 24px;
    list-style-type: none;

    &--clickable {
      &:hover, &:focus {
        background-color: var(--bs-gray-100);
        cursor: pointer;
      }
    }
  }
}
</style>
