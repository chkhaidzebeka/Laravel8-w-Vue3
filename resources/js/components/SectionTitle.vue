<template>
    <div class="section-title">
        <h1>{{ title }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    setup ({title}) {
        return { title}
    }
})
</script>
