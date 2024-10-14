<template>
  <main class="base-main">
    Tooltip
  </main>
</template>

<script setup>
import { inject } from 'vue';

const UI = inject('UI');
console.log('accordion', UI);
</script>
