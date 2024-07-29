<script setup lang="ts">
import { translate } from '@/lib';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex">
    <header class="basis-1/3">{{ translate("helloWorld") }}</header>

    <body class="basis-2/3">
      <nav>
        <ul class="flex gap-2">
          <li class="underline">{{ translate("nav.about") }}</li>
          <li class="underline">{{ translate("nav.project") }}</li>
          <li class="underline">{{ translate("nav.skills") }}</li>
          <li class="underline">{{ translate("nav.contact") }}</li>
        </ul>
      </nav>
      <RouterView />
    </body>
  </div>
</template>