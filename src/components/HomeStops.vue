<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import AppListing from '@/components/AppListing.vue'
import HomeEmptyColumn from '@/components/HomeEmptyColumn.vue'
import { Stop } from '@/types/stop'

interface HomeStops {
  stops: Stop[]
  activeStop: string
  activeLine?: string
}

const props = defineProps<HomeStops>()
defineEmits<{
  (e: 'setActiveStop', v: number): void
}>()

const uniqueFilteredStops = computed((): string[] => {
  if (!props.activeLine) {
    return []
  }

  const filteredStops = props.stops.filter((item: Stop) => item.line.toString() === props.activeLine)
  const sortedStops = filteredStops.sort((a: Stop, b: Stop) => a.order - b.order)
  const stops = sortedStops.map((item: Stop) => item.stop)

  return [...new Set(stops)]
})
</script>

<template>
  <div :class="`bg-white rounded-1 border border-2 ${activeLine ? 'border-white' : 'border-dashed'}`">
    <template v-if="activeLine">
      <h2 class="m-0 px-4 pt-4 pb-2 lh-lg">
        Bus Line: {{ activeLine }}
      </h2>
      <AppListing
        label="Bus Stops"
        :items="uniqueFilteredStops"
        :active-item="activeStop"
        :is-sort-icon="true"
        @onItemClick="$emit('setActiveStop', $event)"
      />
    </template>
    <HomeEmptyColumn v-else>
      Please select a line
    </HomeEmptyColumn>
  </div>
</template>
