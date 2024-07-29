<script setup lang="ts">
import { translate } from '@/lib';
</script>

<template>
    <body>
        <nav>
            <ul class="flex gap-2">
                <li class="underline">{{ translate("nav.about") }}</li>
                <li class="underline">{{ translate("nav.project") }}</li>
                <li class="underline">{{ translate("nav.skills") }}</li>
                <li class="underline">{{ translate("nav.contact") }}</li>
            </ul>
        </nav>
    </body>
</template>