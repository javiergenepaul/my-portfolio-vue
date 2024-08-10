<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardFooter, CardHeader, Separator } from '@/components/ui';
import { translate } from '@/lib';
import ContactInfo, { ContactInfoInterface } from './ContactInfo.vue';
import SocialLinks, { SocialLinksInterface } from './SocialLinks.vue';

// TODO:: translate
const CONTACT_INFOS: ContactInfoInterface[] = [
    {
        title: translate("home.contactInfo.email"),
        value: "email@gmail.com"
    },
    {
        title: translate("home.contactInfo.phone"),
        value: "+639 XXX XXX XXX"
    },
    {
        title: translate("home.contactInfo.birthDate"),
        value: "MM DD, YYYY"
    },
]

// TODO:: translate
const SOCIAL_LINKS: SocialLinksInterface[] = [
    {
        title: translate("home.socialLinks.github"),
        url: "https://github.com/javiergenepaul",
        avatarImage: "https://github.com/radix-vue.png",
        avatarFallback: "GH"
    },
    {
        title: translate("home.socialLinks.linkedIn"),
        url: "https://www.linkedin.com/in/gene-paul-mar-javier-500b93245/",
        avatarImage: "https://github.com/radix-vue.png",
        avatarFallback: "LI"
    },
    // {
    //     title: translate("home.socialLinks.upwork"),
    //     url: "https://www.upwork.com/freelancers/~0146c967e12a6bff87",
    //     avatarImage: "https://github.com/radix-vue.png",
    //     avatarFallback: "UP"
    // },
    {
        title: translate("home.socialLinks.portfolio"),
        url: "https://paul-javier-portfolio.netlify.app/",
        avatarImage: "https://github.com/radix-vue.png",
        avatarFallback: "GPM"
    }
]

</script>

<template>
    <Card class="h-full flex px-6 flex-col justify-between">
        <div>
            <CardHeader class="items-center">
                <Avatar size="lg">
                    <!-- TODO: add avatar here -->
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>{{ translate("home.initial") }}</AvatarFallback>
                </Avatar>
                <h1 class="text-2xl font-bold">{{ translate("home.name") }}</h1>
                <Badge class="hover:cursor-pointer">{{ translate("home.occupation") }}</Badge>
                <Separator class="mt-4" />
            </CardHeader>
            <CardContent>
                <div class="flex flex-col gap-4">
                    <ContactInfo v-for="(contact, index) in CONTACT_INFOS" :key="index" :title="contact.title"
                        :value="contact.value" />
                </div>
            </CardContent>
        </div>
        <CardFooter class="justify-center">
            <div class="flex items-center justify-center gap-4">
                <SocialLinks v-for="(social, index) in SOCIAL_LINKS" :key="index" :title="social.title"
                    :url="social.url" :avatar-image="social.avatarImage" :avatar-fallback="social.avatarFallback" />
            </div>
        </CardFooter>
    </Card>
</template>