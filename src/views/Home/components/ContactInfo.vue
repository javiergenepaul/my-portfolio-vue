<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components';

export interface ContactInfoInterface {
    title: string;
    value: string;
}

const props = defineProps<ContactInfoInterface>();
</script>

<template>
    <div class="flex items-center gap-4">
        <Avatar>
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
            <h4>{{ props.title }}</h4>
            <h3>{{ props.value }}</h3>
        </div>
    </div>
</template>