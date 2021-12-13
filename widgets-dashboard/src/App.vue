<template>
  <div id="app">
    <keep-alive>
      <Charts class="mx-28 mt-24 mb-12"></Charts>
    </keep-alive>
  </div>
</template>

<script>
import Charts from './components/Charts.vue';

export default {
  name: 'app',
  data() {
    return {
    };
  },
  components: {
    Charts,
  },
};
</script>

<style src="./assets/tailwind.css">
