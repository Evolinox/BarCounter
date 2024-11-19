<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { onMounted } from 'vue';

onMounted(() => {
  const colorMode = useColorMode();

  colorMode.value = 'auto';
});
</script>

<template>
  <RouterView />
</template>