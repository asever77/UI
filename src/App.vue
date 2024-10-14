<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const transitionName = ref(null);

watch(() => route.meta.depth, (newValue, oldValue) => {
  const transtionDirection = newValue - oldValue;

  if (transtionDirection > 0) {
    transitionName.value = 'next';
  } else if (transtionDirection < 0) {
    transitionName.value = 'prev';
  } else { 
    transitionName.value = null;
  }
});
</script>

<template>
<div class="base-app--desktop">
  <div class="base-app--wrap">
    <!-- zindex: 0~99 -->
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <Component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <!-- zindex: 100~199 -->
    <div class="base-layer"></div>

    <!-- zindex: 200~299 -->
    <div class="base-alert"></div>

    <!-- zindex: 300~399 -->
    <div class="base-toast"></div>
  </div>
</div>
</template>

<style lang="scss">
</style>
