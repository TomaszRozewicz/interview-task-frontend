<script setup lang="ts">
import { useStore } from 'vuex'
import TheNavigation from '@/components/TheNavigation.vue'

const store = useStore()
store.dispatch('fetchStops')
</script>

<template>
  <div class="px-5 py-6">
    <h1>
      Stops Board
    </h1>
    <TheNavigation />
    <RouterView />
  </div>
</template>
