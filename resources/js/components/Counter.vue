<template>
    <section class="counter">
        <p>Count is: {{ state.count }}</p>
        <div class="d-flex">
            <button class="btn" @click="state.increase">+</button>
            <button class="btn" @click="state.decrease">-</button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup () {
        const state = reactive({
            count: 0,
            increase: () => state.count++,
            decrease: () => state.count--
        })

        return { state }
    }
})
</script>