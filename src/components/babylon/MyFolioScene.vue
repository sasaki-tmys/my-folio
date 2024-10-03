<template>
    <canvas id="renderCanvas"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { BuildingScene } from '@/components/babylon/parts/BuildingScene'

export default defineComponent({
    name: 'BabylonScene',
    setup() {
        onMounted(() => {
            const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
            new BuildingScene(canvas)
        })
    }
})
</script>

<style>
#renderCanvas {
    width: 100%;
    height: 100%;
}
</style>
