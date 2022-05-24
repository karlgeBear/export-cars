<template>
  <div class="new-cars">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <div class="filter-car">
      <div class="first-row">
        <FilterCarSelect :title="`type`" :options="typeOptionData" />
      </div>
      <div class="second-row"></div>
      <div class="third-row"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ExportCarsNewCars',
  data() {
    return {
      typeOptionData: [
        {
          value: "1",
          label: "Audi",
        },
        {
          value: "2",
          label: "BMW",
        },
        {
          value: "3",
          label: "Bentley",
        },
        {
          value: "4",
          label: "Porsche",
        },
        {
          value: "5",
          label: "Cadillac",
        },
      ],
      value: ''
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>