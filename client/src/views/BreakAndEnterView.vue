<script setup>
import Map from "@/components/MapComponent.vue";
import CardComponent from "@/components/CardComponent.vue";  // Import the reusable card component

// Data for this specific page (e.g., Break and Enter)
const crimeData = {
  mapName: "BreakAndEnter",
  cards: [
    {
      title: "Incidents by Year",
      imgSrc: "@/assets/images/breakAndEnter/byYear.png",
      imgAlt: "Break and Enter by Year",
      description: "This chart shows the distribution of break and enter incidents across different years."
    },
    // Add more cards as necessary...
  ]
};
</script>

<template>

<section>
<h2>Data Source</h2>
    <p class="data-source">
      <a href="https://open.ottawa.ca/datasets/ottawa::criminal-offences-/about" target="_blank">Criminal Offences</a>between 2017-2021 from the Open Ottawa project.  
    </p>
    <p>This data includes all founded Criminal Code of Canada offences reported to the Ottawa Police years from 2017 to 2021. Offences have been categorized according to the Uniform Crime Reporting (UCR) Survey. For privacy reasons, the location of crime occurrences has been geomasked to the nearest intersection.</p>
  </section>
 
  <section>
    <h2 class="section-title">Description</h2>
    <p>
      Break and Enter is the act of entering a place to commit, or with intent to commit, an indictable offense, or breaking out after doing so. This includes offences committed with the intent to steal a firearm and with the intent to steal a firearm from a motor vehicle. (Criminal Code of Canada, sections 98 and 348) .</p>
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
