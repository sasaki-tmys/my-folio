<template>
    <v-row justify="center">
    <v-col>
        <v-card flat color="secondary">
        <v-card-text>
            <apexchart :options="chartOptions" :series="chartSeries"></apexchart>
        </v-card-text>
        </v-card>
    </v-col>
    </v-row>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    skills: Array,
});

const chartOptions = ref({
    chart: {
    height: 350,
    type: 'radar',
    },
    xaxis: {
    categories: []
    },
    title: {
    text: ''
    },
    markers: {
    size: 4,
    colors: ['#FF4560'],
    strokeColor: '#fff',
    strokeWidth: 2,
    },
    tooltip: {
    y: {
        formatter: (val) => `${val} %`
    }
    },
    yaxis: {
    tickAmount: 7,
    labels: {
        formatter: (val, i) => (i % 2 === 0 ? val.toFixed(0) : ''),
    }
    }
});

const chartSeries = ref([
    {
        name: '経験レベル (%)',
        data: []
    },
    {
        name: '好き度（%）',
        data: [],
    }
]);

watchEffect(() => {
    chartOptions.value.xaxis.categories = props.skills.map(skill => skill.name);
    chartSeries.value[0].data = props.skills.map(skill => skill.level);
    chartSeries.value[1].data = props.skills.map(skill => skill.likes);
    chartOptions.value.title.text = props.title;
});
</script>
