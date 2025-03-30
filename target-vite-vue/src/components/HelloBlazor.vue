<script setup lang="ts">
import BlazorComponent from '../blazor/BlazorComponent.vue';
defineProps<{ msg: string }>()
</script>
<template>
  <h1>{{ msg }}</h1>
  <BlazorComponent />
  <p class="read-the-docs">Click on the Vite, Vue or Blazor logo to learn more</p>
</template>
