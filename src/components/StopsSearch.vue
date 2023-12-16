<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import IconSearch from '@/components/IconSearch.vue'

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const isInputFocused = ref(false)
</script>

<template>
  <div class="app-search">
    <IconSearch :class="`app-search__icon ${isInputFocused ? 'app-search__icon--active' : ''}`" />
    <input
      :value="modelValue"
      type="text"
      class="form-control app-search__input"
      placeholder="Search..."
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isInputFocused = true"
      @blur="isInputFocused = false"
    >
  </div>
</template>

<style scoped lang="scss">
.app-search {
  width: 288px;
  padding: 8px;
  position: relative;

  &__icon {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);

    &--active {
      fill: var(--bs-primary);
    }
  }

  &__input {
    padding-right: 40px;
  }
}
</style>
