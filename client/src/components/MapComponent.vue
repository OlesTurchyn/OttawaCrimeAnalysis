<template>
    <div class="heatmap-container">
      <iframe
        :src="getMapUrl(mapName)"
        class="heatmap-iframe"
        title="Heatmap Visualization"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mapName: {
        type: String,
        required: true,
      },
    },
    methods: {
      // Method to determine the map URL based on the map name
      getMapUrl(mapName) {
        return `/maps/${mapName}.html`;
      },
    },
  };
  </script>
  
  <style scoped>
  .heatmap-container {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  
  .heatmap-iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  