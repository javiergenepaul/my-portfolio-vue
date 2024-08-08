<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui';
import { PATH } from '@/config';
import { translate } from '@/lib';
import { RouterLink } from 'vue-router';

const filteredRoutes = Object.values(PATH).filter(route => (route.name !== PATH.NOT_FOUND.name && route.name !== PATH.HOME.name));
</script>

<template>
    <Card>
        <CardHeader>
            <nav class="flex justify-end">
                <ul class="flex gap-2">
                    <RouterLink v-for="route in filteredRoutes" :key="route.name" :to="route.path"
                        class="text-foreground" exact-active-class="underline text-primary">
                        {{ translate(`nav.${route.name.toLowerCase()}` as any) }}
                    </RouterLink>
                </ul>
            </nav>
        </CardHeader>
    </Card>
</template>