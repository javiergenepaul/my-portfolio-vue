<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HomeBody, HomeView } from './components';
</script>

<template>
  <div class="flex py-12 px-8 gap-4 h-screen">
    <header class="basis-1/4">
      <HomeView />
    </header>
    <body class="basis-3/4">
      <HomeBody />
      <RouterView />
    </body>
  </div>
</template>