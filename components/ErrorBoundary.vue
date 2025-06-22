<template>
  <div>
    <slot v-if="!hasError" />
    <div v-else class="error-fallback">
      <h2>Something went wrong.</h2>
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
const hasError = ref(false);
const errorMessage = ref("");
const { addLog } = useErrorLogger();

defineExpose({
  errorCaptured(err, vm, info) {
    hasError.value = true;
    errorMessage.value = err.message || "Unknown error";
    addLog("error", err.message, { info });
    return false; // Prevent further propagation
  },
});
</script>

<style scoped>
.error-fallback {
  padding: 2rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #991b1b;
}
</style>
