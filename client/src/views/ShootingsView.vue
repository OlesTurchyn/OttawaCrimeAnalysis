<script setup>
import Map from "@/components/MapComponent.vue";
import CardComponent from "@/components/CardComponent.vue";  


const crimeData = {
  mapName: "Shootings",
  cards: [
    {
      title: "Incidents by Year",
      imgSrc: "@/assets/images/Shootings/byYear.png",
      imgAlt: "Shootings by Year",
      description: "This chart shows the distribution of shooting incidents across different years."
    },
    // Add more cards as necessary...
  ]
};
</script>

<template>
    <section>
    <h2>Data Source</h2>
    <p class="data-source">
      <a href="https://open.ottawa.ca/datasets/ottawa::shootings-and-firearm-discharges/about" target="_blank">Shootings and Firearm Discharges</a> between 2016-2022 from the Open Ottawa project.  
    </p>

    <p>This dataset contains shooting incidents occurrences from 2016 - 2022.

For privacy reasons, the locations of crime occurrences have been aggregated to nearest neighbourhoods or the census tract. 

The crime statistics published are accurate on the day that they were produced. Due to ongoing police investigations and internal data quality control efforts, this information is subject to change, including addition, deletion and reclassification of any and all data.</p>
  </section>
 
  <section>
    <h2 class="section-title">Description</h2>
    <p>This data </p>
  </section>
  <h2 class="section-title">Heatmap Visualization</h2>
  <Map :mapName="crimeData.mapName" />

  <section id="temporal-analysis">
    <h2 class="section-title">Temporal Analysis</h2>
    <div class="card-container">
      <CardComponent
        v-for="(card, index) in crimeData.cards"
        :key="index"
        :title="card.title"
        :imgSrc="card.imgSrc"
        :imgAlt="card.imgAlt"
        :description="card.description"
      />
    </div>
  </section>

  <section>
    <h2 class="section-title">Data Source</h2>
    <p class="data-source">
      <a href="https://open.ottawa.ca/">Open Ottawa</a> Project
    </p>
  </section>
</template>
