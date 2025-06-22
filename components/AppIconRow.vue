<script setup>
import AppIcon from "./AppIcon.vue";
import { ref, onMounted } from "vue";

const icons = ref([]);

onMounted(async () => {
  try {
    const res = await fetch("/mock/icons.json");
    icons.value = await res.json();
    console.log("Loaded icons:", icons.value);
  } catch (error) {
    console.error("Failed to load icons:", error);
  }
});
</script>

<template>
  <div class="icon-row">
    <AppIcon v-for="icon in icons" :key="icon.name" v-bind="icon" />
    <AppIcon name="Add" icon="/images/add.png" link="#" />
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

/* Responsive adjustments */
@media (max-width: 640px) {
  .icon-row {
    gap: 8px;
    padding: 8px;
  }
}
</style>
