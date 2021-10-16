<template>
    <router-link :to="{name: 'home'}">Home</router-link>
    <v-title title="Articles" />

    <div v-if="resp">
        <div class="articles">
            <div class="articles__item" v-for="(article, index) in resp" :key="index">
                <div class="articles__item-title">
                    <h2>{{ article.title }}</h2>
                </div>
                <div class="articles__item-body">
                    <p>{{ article.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useFetch } from "../hooks/fetch";


export default defineComponent({
    setup () {
        const { req, resp } = useFetch();

        onBeforeMount(async () => {
            await req("https://jsonplaceholder.typicode.com/posts");
        })

        return { resp }
    }
})
</script>