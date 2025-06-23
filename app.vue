<!-- app.vue -->
<template>
  <ErrorBoundary>
    <div class="app-background">
      <NuxtPage />
      <GlobalModal />
    </div>
  </ErrorBoundary>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: sans-serif;
}

.app-background {
  min-height: 100vh;
  background: radial-gradient(circle at center, #e5f0ff, #cbd5e1);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 40px;
}
</style>
