<script setup lang="ts">
import { useStore } from 'vuex'
import { ref } from 'vue'
import HomeLines from '@/components/HomeLines.vue'
import HomeStops from '@/components/HomeStops.vue'
import HomeTimes from '@/components/HomeTimes.vue'

const store = useStore()
const activeLine = ref('')
const activeStop = ref('')
const setActiveLine = (line: string) => {
  activeLine.value = line
  activeStop.value = ''
}
</script>

<template>
  <div>
    <HomeLines
      :stops="store.state.stops"
      :active-line="activeLine"
      @setActiveLine="setActiveLine"
    />
    <div class="d-grid d-md-flex gap-3">
      <HomeStops
        class="col page-home__column"
        :stops="store.state.stops"
        :active-line="activeLine"
        :active-stop="activeStop"
        @setActiveStop="activeStop = $event"
      />
      <HomeTimes
        class="col page-home__column"
        :stops="store.state.stops"
        :active-line="activeLine"
        :active-stop="activeStop"
      />
    </div>
  </div>
</template>

<style lang="scss">
.page-home {
  &__column {
    height: 444px;
    overflow-y: hidden;

    .app-listing__list {
      overflow-y: auto;
      height: 324px;
    }
  }
}
</style>
