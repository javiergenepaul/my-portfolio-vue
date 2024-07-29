<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui';
import { translate } from '@/lib';
</script>

<template>
    <Card>
        <CardHeader>
            <nav class="flex justify-end">
                <ul class="flex gap-2">
                    <li class="underline">{{ translate("nav.about") }}</li>
                    <li class="underline">{{ translate("nav.project") }}</li>
                    <li class="underline">{{ translate("nav.skills") }}</li>
                    <li class="underline">{{ translate("nav.contact") }}</li>
                </ul>
            </nav>
        </CardHeader>
    </Card>
</template>