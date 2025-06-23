<script setup>
const { openModal } = useModal();
function onAddClick() {
  openModal();
}
const props = defineProps({
  icons: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="icon-row">
    <AppIcon v-for="icon in icons" :key="icon.name" v-bind="icon" />
    <AppIcon
      class="hidden"
      name="Add Social"
      src="/icons/add.png"
      @click.prevent="onAddClick"
    />
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
