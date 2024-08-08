<script setup lang="ts">
import { Card, CardContent } from '@/components';
</script>

<template>
    <section class="h-full mt-4">
        <Card class="h-full">
            <CardContent class="py-6">
                <slot />
            </CardContent>
        </Card>
    </section>
</template>