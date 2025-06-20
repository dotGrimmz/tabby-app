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
    <AppIcon
      name="Add"
      icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbK6Z6dI6tw3QLHnie43wHplGkck8lr2krHw&s"
      link="#"
    />
  </div>
</template>

<style scoped>
.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
}
</style>
