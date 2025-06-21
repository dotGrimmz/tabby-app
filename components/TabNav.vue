<template>
  <nav class="tab-nav">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: tab === modelValue }]"
      @click="$emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </nav>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

const tabs = [
  "Home",
  "News",
  "Sports",
  "Money",
  "Lifestyle",
  "Politics",
  "Health",
  "Food",
  "Entertainment",
];
</script>

<style scoped>
.tab-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.tab-button {
  padding: 8px 16px;
  font-size: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 9999px;
  background-color: #f3f4f6;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.tab-button:hover {
  background-color: #e5e7eb;
}

.tab-button.active {
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
