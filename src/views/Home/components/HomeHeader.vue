<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardHeader, Separator } from '@/components/ui';
import { translate } from '@/lib';
</script>

<template>
    <Card>
        <CardHeader class="items-center">
            <Avatar size="lg">
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 class="text-2xl">{{ translate("home.name") }}</h1>
            <Badge>{{ translate("home.occupation") }}</Badge>
            <Separator class="mt-4" />
        </CardHeader>
        <CardContent>
            contetn
        </CardContent>
    </Card>

</template>