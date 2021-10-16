<template>
    <v-title title="Home view" />
    <Counter />

    <br>
    <router-link :to="{name: 'articles'}">Articles</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Counter from "../components/Counter.vue"

export default defineComponent({
    components: { Counter } ,
    setup () {
        return {}
    }
})
</script>
