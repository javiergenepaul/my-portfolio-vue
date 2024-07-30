<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components';

export interface SocialLinksInterface {
    url: string;
    title: string;
}

const props = defineProps<SocialLinksInterface>();

const openLink = () => {
    window.open(props.url, '_blank');
}
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger @click="openLink">
                <Avatar>
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </TooltipTrigger>
            <TooltipContent>
                <p>{{ props.title }}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>

</template>