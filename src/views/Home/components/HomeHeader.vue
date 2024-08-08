<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardFooter, CardHeader, Separator } from '@/components/ui';
import { translate } from '@/lib';
import ContactInfo, { ContactInfoInterface } from './ContactInfo.vue';
import SocialLinks, { SocialLinksInterface } from './SocialLinks.vue';

const CONTACT_INFOS: ContactInfoInterface[] = [
    {
        title: "EMAIL",
        value: "javiergenepaul@gmail.com"
    },
    {
        title: "PHONE",
        value: "+639 762 912 231"
    },
    {
        title: "BIRTHDATE",
        value: "July 20, 1998"
    },
]

const SOCIAL_LINKS: SocialLinksInterface[] = [
    {
        title: "Github",
        url: "https://github.com/javiergenepaul"
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/gene-paul-mar-javier-500b93245/"
    },
    {
        title: "Upwork",
        url: "https://www.upwork.com/freelancers/~0146c967e12a6bff87"
    }
]

</script>

<template>
    <Card class="h-full flex-1">
        <CardHeader class="items-center">
            <Avatar size="lg">
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 class="text-2xl font-bold">{{ translate("home.name") }}</h1>
            <Badge>{{ translate("home.occupation") }}</Badge>
            <Separator class="mt-4" />
        </CardHeader>
        <CardContent>
            <div class="flex flex-col gap-4">
                <ContactInfo v-for="(contact, index) in CONTACT_INFOS" :key="index" :title="contact.title"
                    :value="contact.value" />
            </div>
        </CardContent>
        <CardFooter class="mt-4 justify-center">
            <div class="flex items-center justify-center gap-4">
                <SocialLinks v-for="(social, index) in SOCIAL_LINKS" :key="index" :title="social.title"
                    :url="social.url" />
            </div>
        </CardFooter>
    </Card>
</template>