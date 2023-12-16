<script setup lang="ts">
import AppListing from '@/components/AppListing.vue'
import StopsSearch from '@/components/StopsSearch.vue'
import { computed, ref } from 'vue'
import { Stop } from '@/types/stop'
import { useStore } from 'vuex'

const store = useStore()
const searchText = ref('')

const filteredStops = computed((): string[] => {
  const stops = [...store.state.stops].map((item: Stop) => item.stop)
  const uniqueStops = [...new Set(stops)]
  const filteredStops = uniqueStops.filter((item: string) =>
    item.toLowerCase().includes(searchText.value.toLowerCase())
  )

  return filteredStops.sort((a: string, b: string) => b.localeCompare(a))
})
</script>

<template>
  <div class="bg-white rounded-1">
    <StopsSearch
      :model-value="searchText"
      @update:model-value="newValue => searchText = newValue"
    />
    <AppListing
      v-if="filteredStops.length"
      label="Bus Stops"
      :items="filteredStops"
      :is-clickable="false"
      :is-sort-icon="true"
    />
  </div>
</template>
