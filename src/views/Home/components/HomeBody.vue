<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui';
import { PATH } from '@/config';
import { translate } from '@/lib';
import { RouterLink } from 'vue-router';

</script>

<template>
    <Card>
        <CardHeader>
            <nav class="flex justify-end">
                <ul class="flex gap-2">
                    <RouterLink :to="PATH.ABOUT.path" class="underline">{{ translate("nav.about") }}</RouterLink>
                    <RouterLink :to="PATH.PROJECT.path" class="underline">{{ translate("nav.project") }}</RouterLink>
                    <RouterLink :to="PATH.SKILLS.path" class="underline">{{ translate("nav.skills") }}</RouterLink>
                    <RouterLink :to="PATH.CONTACT.path" class="underline">{{ translate("nav.contact") }}</RouterLink>
                </ul>
            </nav>
        </CardHeader>
    </Card>
</template>