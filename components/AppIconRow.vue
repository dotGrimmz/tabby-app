<script setup>
import SkeletonLoader from "~/components/SkeletonLoader.vue";

// Use useAsyncData for better SSR support
const {
  data: icons,
  pending,
  error,
} = await useAsyncData("icons", () => $fetch("/mock/icons.json"));
</script>

<template>
  <div class="icon-row-wrapper">
    <!-- Show skeleton while loading or errored -->
    <SkeletonLoader v-if="pending || error || !icons || icons.length === 0" />

    <!-- Only render icons once fully loaded -->
    <div v-else class="icon-row">
      <AppIcon v-for="icon in icons" :key="icon.name" v-bind="icon" />
      <AppIcon name="Add" icon="/images/add.png" link="#" />
    </div>
  </div>
</template>

<style scoped>
.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .icon-row {
    gap: 8px;
    padding: 8px;
  }
}
</style>
