<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex">
    <header class="basis-1/3">Header Here</header>
    <body class="basis-2/3">
      <nav>
        <ul class="flex gap-2">
          <li class="underline">About</li>
          <li class="underline">Project</li>
          <li class="underline">Skills</li>
          <li class="underline">Contact</li>
        </ul>
      </nav>
      <RouterView />
    </body>
  </div>
</template>