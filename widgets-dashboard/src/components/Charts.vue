<template>
  <div class="grid grid-cols-3 gap-20">
    <div class="col-span-1">
      <!-- combine series in another broad -->
      <div>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="text-green-800 text-center font-serif text-2xl">
            Combine broads
          </div>
          <div class="name text-orange-900">
            Please select the board you want to combine
          </div>
          <input type="number" v-model="incomingDashbroad" />
          <div>Please choose the board you want to combine with</div>
          <input type="number" v-model="lastDashbroad" />
          <button
            class="bg-blue-500 text-white font-bold py-1 px-2 ml-12 mt-4"
            @click="combineDashbroad(incomingDashbroad, lastDashbroad)"
          >
            Combine dashbroad
          </button>
        </div>
      </div>
      <div class="space-y-10" v-if="activeCreatingBoard">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="text-green-800 text-center font-serif text-2xl">
            Create custom broad
          </div>
          <CreateDashbroad @add-dashbroad="addDashbroad"></CreateDashbroad>
        </div>
        <div class="mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="text-green-800 text-center font-serif text-2xl">
            Create static broad
          </div>
          <button
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            @click.prevent="onSubmit"
          >
            Add static dashbroad with VueRX
          </button>
        </div>
        <!-- <form @submit.prevent="onSubmit">
          create with form for testing but interesting 
          <button
            class="text-orange-900 bg-amber-300 rounded-full"
            type="submit"
          >
            Add static dashbroad
          </button>
        </form> -->

        <!-- create custom broad -->
      </div>
    </div>
    <div class="col-start-2 col-end-4">
      <Chart
        v-for="(option, index) in options"
        :key="index"
        :option="option"
      ></Chart>
    </div>
  </div>
</template>

<script>
import Chart from './Chart/Chart.vue';
import CreateDashbroad from './Dashboard/CreateDashbroad.vue';

export default {
  components: {
    Chart,
    CreateDashbroad,
  },
  data() {
    return {
      maxDiagramm: 4,
      incomingDashbroad: 0,
      lastDashbroad: 0,
      counter: 0,
      activeCreatingBoard: true,
      options: [
        {
          chart: {
            type: 'spline',
          },
          title: {
            text: 'Sin chart',
          },
          yAxis: {
            title: {
              text: 'sadsadads',
            },
          },
          series: [
            {
              name: 'Temperature',
              data: [10, 0, 8, 2, 6, 4, 5, 5],
              color: '#6fcd98',
            },
          ],
        },
        {
          chart: {
            type: 'column',
          },
          title: {
            text: 'Second chart',
          },
          yAxis: {
            title: {
              text: 'sadsadads',
            },
          },
          series: [
            {
              name: 'Temperature',
              data: [12, 13, 1, 1, 6, 5, 4, 1],
              color: '#6fcd98',
            },
          ],
        },
        {
          chart: {
            type: 'column',
          },
          title: {
            text: 'Fird chart',
          },
          yAxis: {
            title: {
              text: 'sadsadads',
            },
          },
          series: [
            {
              name: 'fird Temperature',
              data: [13, 2, 9, 2, 2, 3, 3, 3],
              color: '#6f96cd',
            },
          ],
        },
      ],
    };
  },
  methods: {
    deleteBroad(id) {
      this.$delete(this.options, id);
    },
    addDashbroad(dashbroad) {
      this.options.push(dashbroad);

      var broadsCount = parseInt(this.options.length);

      if (broadsCount >= 4) {
        this.activeCreatingBoard = false;
        alert(
          'It was done through crutches, but according to the condition, only 4 diagrams can be arranged :) Therefore, you need to combine the diagrams'
        );
      }
    },
    combineDashbroad(firstSeries, lastSeries) {
      const first = firstSeries - 1;
      const last = lastSeries - 1;

      if (
        firstSeries > -1 &&
        lastSeries > 0 &&
        this.options.length >= 2 &&
        firstSeries != lastSeries
      ) {
        this.options[last].series.forEach((series) =>
          this.options[first].series.push(series)
        );

        this.$delete(this.options, last);
      } else {
        alert('Please provide valid number of broads');
      }

      var broadsCount = parseInt(this.options.length);

      if (broadsCount <= 4) {
        this.activeCreatingBoard = true;
      }
    },
    onSubmit() {
      this.options.push({
        chart: {
          type: 'spline',
        },
        title: {
          text: 'Frird chart',
        },
        yAxis: {
          title: {
            text: 'sadsadads',
          },
        },
        series: [
          {
            name: 'Temperature',
            data: [12, 13, 1, 1, 6, 5, 4, 1],
            color: '#6fcd98',
          },
          {
            name: 'Second Temperature',
            data: [13, 2, 9, 2, 2, 3, 3, 3],
            color: '#6f96cd',
          },
        ],
      });

      var broadsCount = parseInt(this.options.length);

      if (broadsCount >= 4) {
        this.activeCreatingBoard = false;
        alert(
          'It was done through crutches, but according to the condition, only 4 diagrams can be arranged :) Therefore, you need to combine the diagrams'
        );
      }
    },
  },
};
</script>

<style>
.name {
  color: red;
}
</style>
