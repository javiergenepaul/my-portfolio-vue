<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui';
import { PATH } from '@/config';
import { translate } from '@/lib';
import { RouterLink, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const pageTitle = ref('');

// Find the current route name
const filteredRoutes = Object.values(PATH).filter(route => (route.name !== PATH.NOT_FOUND.name && route.name !== PATH.HOME.name));

// update title on change
const updateTitle = () => {
    const currentRoute = Object.values(PATH).find(r => r.name === route.name);
    if (currentRoute) {
        pageTitle.value = translate(`nav.${currentRoute.name.toLowerCase()}` as any);
    }
};

// Watch for changes in the route and update the title accordingly
watch(route, updateTitle, { immediate: true });

// Initially set the title
updateTitle();
</script>

<template>
    <Card>
        <CardHeader>
            <nav class="flex justify-between items-center">
                <div class="text-2xl font-bold">
                    {{ pageTitle }}
                </div>
                <ul class="flex gap-6">
                    <RouterLink v-for="route in filteredRoutes" :key="route.name" :to="route.path"
                        class="text-foreground hover:underline" exact-active-class="text-primary">
                        {{ translate(`nav.${route.name.toLowerCase()}` as any) }}
                    </RouterLink>
                </ul>
            </nav>
        </CardHeader>
    </Card>
</template>