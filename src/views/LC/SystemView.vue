<template>
  <main class="base-main">
    System
  </main>
</template>

<script setup>
import { inject } from 'vue';

const UI = inject('UI');
console.log('System', UI);
</script>
