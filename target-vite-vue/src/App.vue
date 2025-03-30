<script setup lang="ts">
import HelloBlazor from './components/HelloBlazor.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" target="_blank">
      <img src="./assets/blazor.svg" className="logo blazor" alt="Blazor logo" />
    </a>
  </div>
  <HelloBlazor msg="Vite + Vue + Blazor" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
