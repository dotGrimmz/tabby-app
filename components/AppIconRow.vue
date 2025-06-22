<script setup>
const props = defineProps({
  icons: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (item) =>
          typeof item.name === "string" &&
          typeof item.url === "string" &&
          typeof item.src === "string"
      ),
  },
});
</script>
<template>
  <div class="icon-row">
    <AppIcon v-for="icon in icons" :key="icon.name" v-bind="icon" />
    <AppIcon name="Add" src="/icons/add.png" url="#" />
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
