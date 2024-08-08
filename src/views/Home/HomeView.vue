<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HomeBody, HomeView } from './components';
</script>

<template>
  <div class="flex flex-col py-8 px-8 gap-4 max-h-screen min-h-screen h-full overflow-hidden">
    <div class="flex-1 flex gap-8 h-full w-full text-white">
      <header class="basis-1/4">
        <HomeView />
      </header>

      <body class="basis-3/4">
        <HomeBody />
        <RouterView />
      </body>

    </div>
  </div>
</template>