<template>
  <div class="skeleton-wrapper">
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text short"></div>
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  max-width: 400px;
  margin: 1rem 0;
}

.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 37%, #e0e0e0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 12px;
}

/* Different sizes for title and text */
.skeleton-title {
  height: 24px;
  width: 70%;
}

.skeleton-text {
  height: 16px;
  width: 100%;
}

.skeleton-text.short {
  width: 50%;
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -400% 0;
  }
  100% {
    background-position: 400% 0;
  }
}
</style>
