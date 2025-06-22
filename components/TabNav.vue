<template>
  <nav class="tab-nav">
    <!-- Desktop Tabs -->
    <ul v-if="!isMobile" class="tabs">
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: tab === modelValue }"
        @click="$emit('update:modelValue', tab)"
      >
        {{ tab }}
      </li>
    </ul>

    <!-- Mobile Dropdown -->
    <select
      v-else
      v-model="selected"
      @change="$emit('update:modelValue', selected)"
      class="opt"
    >
      <option class="opt" v-for="tab in tabs" :key="tab" :value="tab">
        {{ tab }}
      </option>
    </select>
  </nav>
</template>

<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

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

const selected = ref(props.modelValue);
const { isMobile } = useIsMobile();

watch(
  () => props.modelValue,
  (val) => {
    selected.value = val;
  }
);
</script>

<style scoped>
.tab-nav {
  margin-bottom: 1.5rem;
}

.tabs {
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  flex-wrap: wrap;
}

.tabs li {
  cursor: pointer;
  font-size: 14px;
  color: #6b7280;
  padding-bottom: 6px;
  position: relative;
  transition: color 0.2s ease;
  min-width: 80px;
  text-align: center;
}

.tabs li:hover {
  color: var(--color-primary);
  transition: color 0.2s ease;
}

.tabs li.active {
  color: #0096e6;
  font-weight: 600;
}

.tabs li.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background-color: #0096e6;
  border-radius: 1px;
}

select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #111827;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.opt {
  cursor: pointer;
}
</style>
