<template>
  <main class="base-main">
     <button type="button" @click="aaa()">main</button>
  </main>
</template>

<script setup>
// import { inject } from 'vue';
const aaa = () => {
  console.log(window.UI);
}
console.log(window.UI);
// const UI = inject('UI');
// console.log('main', UI);
</script>
