<template>
  <div class="">
    <highcharts class="chart" :options="option"></highcharts>
    <div id="chartType">
      <h3>Select chart type:</h3>
      <select v-model="chartType">
        <option>Spline</option>
        <option>AreaSpline</option>
        <option>Line</option>
        <option>Scatter</option>
        <option>Column</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Array,
    },
  },
  data() {
    return {
      chartType: this.option.chart.type.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase();
      }),
    };
  },
  watch: {
    chartType(newValue) {
      this.option.chart.type = newValue.toLowerCase();
    },
  },
};
</script>
