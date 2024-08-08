<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components';

interface SectionContainerInterface {
    title: string
}

const { title } = defineProps<SectionContainerInterface>()
</script>

<template>
    <section class="mt-4 h-full">
        <Card class="h-full">
            <CardHeader>
                {{ title }}
            </CardHeader>
            <CardContent>
                <slot />
            </CardContent>
        </Card>
    </section>
</template>