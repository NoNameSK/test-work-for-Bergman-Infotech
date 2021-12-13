<template>
  <div class="grid">
    <div class="bg-slate-500">
      <div class="font-bold">
        Please enter chart type:
        <select
          class="bg-white shadow-md rounded px-2 pt-3 pb-4 mb-2"
          type="text"
          v-model="chartType"
        >
          <option>Spline</option>
          <option>Column</option>
        </select>
      </div>
    </div>
    <input
      type="text"
      placeholder="enter serias title Text"
      v-model="titleText"
    />
    <input
      type="text"
      placeholder="enter serias left Title"
      v-model="leftTitle"
    />
    <input
      type="text"
      placeholder="enter serias series Name"
      v-model="seriesName"
    />
    <div class="bg-slate-500">
      <input
        type="number"
        placeholder="enter serias point"
        v-model="addSeriesData"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full mt-5"
        @click.prevent="addSeries"
      >
        Add Serias Data
      </button>
      <span
        ><div v-for="(data, index) in seriesData" :key="index">
          Point (N:{{ index + 1 }}): {{ data }}
        </div></span
      >
    </div>

    <button
      class="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click.prevent="onSubmit"
    >
      Create custom broad
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seriasCount: 0,
      chartType: 'Spline',
      titleText: '',
      leftTitle: '',
      seriesName: '',
      addSeriesData: 0,
      seriesData: [],
      seriesColor: '#6fcd98',
    };
  },
  methods: {
    addSeries() {
      this.seriesData.push(parseInt(this.addSeriesData));
      console.log(this.seriesData);
    },
    onSubmit() {
      console.log(this.seriasCount);

      const letters = '0123456789abcdef';

      var color = '#';

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      const newDashbroad = {
        chart: {
          type: this.chartType.toLowerCase(),
        },
        title: {
          text: this.titleText,
        },
        yAxis: {
          title: {
            text: this.leftTitle,
          },
        },
        series: [
          {
            name: this.seriesName,
            data: this.seriesData,
            color: color,
          },
        ],
      };

      this.$emit('add-dashbroad', newDashbroad);

      this.chartType = 'Spline';
      this.titleText = '';
      this.leftTitle = '';
      this.seriesName = '';
      this.seriesData = [];
    },
  },
};
</script>
