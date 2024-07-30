<script setup lang="ts">
import { Button } from '@/components';
import useStore from '@/stores/AppStateStore';

const { count, doubleCount, increaseCount, doubleCountAction } = useStore();

</script>

<template>
    <section>
        About Section
        <Button @click="increaseCount">Click Me</Button>
    </section>
</template>