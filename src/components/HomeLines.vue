<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { Stop } from '@/types/stop'

interface HomeLines {
  stops: Stop[]
  activeLine?: string
}

const props = defineProps<HomeLines>()
defineEmits<{
  (e: 'setActiveLine', v: string): void
}>()

const uniqueSortedLines = computed((): string[] => {
  const lines = props.stops?.map((item: Stop) => item.line)
  const uniqueLines = [...new Set(lines)]
  const sortedLines = uniqueLines.sort()
  return sortedLines.map(item => item.toString())
})
</script>

<template>
  <div class="bg-white rounded-1 p-4 mb-3">
    <h2 class="mb-5">
      Select bus line
    </h2>
    <div class="d-flex flex-wrap gap-2">
      <button
          v-for="line in uniqueSortedLines"
          :key="line"
          type="button"
          class="btn btn-primary btn-sm"
          :disabled="!!activeLine && activeLine === line"
          @click="$emit('setActiveLine', line)"
      >
        {{ line }}
      </button>
    </div>
  </div>
</template>
