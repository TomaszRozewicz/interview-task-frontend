<template>
  <div class="home-empty-column">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.home-empty-column {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 16px;
  font-size: 14px;
  color: var(--bs-gray-500);
}
</style>
