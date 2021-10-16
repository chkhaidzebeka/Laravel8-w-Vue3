<template>
    <div>
        <h1>404</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../../router'

export default defineComponent({
    setup () {

        setTimeout(() => {
            router.push({
                path: '/'
            })
        },5000)
        return {}
    }
})
</script>