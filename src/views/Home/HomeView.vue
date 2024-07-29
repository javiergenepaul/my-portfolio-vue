<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HomeBody, HomeView } from './components';
</script>

<template>
  <div class="flex py-12 px-8 gap-4">
    <HomeView />
    <body class="basis-2/3">
      <HomeBody />
      <RouterView />
    </body>
  </div>
</template>