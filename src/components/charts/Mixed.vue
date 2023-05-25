<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "Mixed",

  data() {
    return {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "Today's User Visit",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [
          "01 Jan 2023",
          "02 Jan 2023",
          "03 Jan 2023",
          "04 Jan 2023",
          "05 Jan 2023",
          "06 Jan 2023",
          "07 Jan 2023",
          "08 Jan 2023",
          "09 Jan 2023",
          "10 Jan 2023",
          "11 Jan 2023",
          "12 Jan 2023",
        ],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: "Website Blog",
            },
          },
          {
            opposite: true,
            title: {
              text: "Social Media",
            },
          },
        ],
      },
    };
  },
};
</script>
