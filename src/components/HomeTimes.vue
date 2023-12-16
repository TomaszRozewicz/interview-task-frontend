<script setup lang="ts">
import { computed, defineProps } from 'vue'
import AppListing from '@/components/AppListing.vue'
import HomeEmptyColumn from '@/components/HomeEmptyColumn.vue'
import { Stop } from '@/types/stop'

interface HomeTimes {
  stops: Stop[]
  activeStop: string
  activeLine: string
}

const props = defineProps<HomeTimes>()

const getUniqueFilteredTimes = (): string[] => {
  if (!props.activeStop) {
    return []
  }

  const filteredStops = props.stops.filter((item: Stop) =>
    item.line.toString() === props.activeLine && item.stop === props.activeStop
  )
  const times = filteredStops.map((item: Stop) => item.time)

  return [...new Set(times)]
}

const sortedUniqueTimes = computed((): string[] => {
  const items = getUniqueFilteredTimes()
  return items.sort((a: string, b: string) => {
    const normalizedA = a.length === 4 ? `0${a}` : a
    const normalizedB = b.length === 4 ? `0${b}` : b
    return normalizedA.localeCompare(normalizedB)
  })
})
</script>

<template>
  <div :class="`bg-white rounded-1 border border-2 ${activeStop ? 'border-white' : 'border-dashed'}`">
    <template v-if="activeStop">
      <h2 class="m-0 px-4 pt-4 pb-2 lh-lg">
        Bus Stop: {{ activeStop }}
      </h2>
      <AppListing
        label="Time"
        :items="sortedUniqueTimes"
        :is-clickable="false"
      />
    </template>
    <HomeEmptyColumn v-else>
      Please select a stop
    </HomeEmptyColumn>
  </div>
</template>
