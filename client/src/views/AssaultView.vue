<script setup>
import Map from "@/components/MapComponent.vue";
import CardComponent from "@/components/CardComponent.vue";  


const crimeData = {
  mapName: "Assaults",
  cards: [
    {
      title: "Incidents by Year",
      imgSrc: "@/assets/images/Assaults/byYear.png",
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
      <a href="https://open.ottawa.ca/datasets/ottawa::criminal-offences-/about" target="_blank">Criminal Offences</a> between 2017-2021 from the Open Ottawa project.  
    </p>

    <p>Assault is the direct or indirect application of force to another person, or the attempt or threat to apply force to another person, without that person's consent. (Criminal Code of Canada, section 265) </p>
  </section>
 
  <section>
    <h2 class="section-title">Description</h2>
    <p>Under section 265 of the Criminal Code, assault can occur in any of the following three situations: Where one person intentionally applies force (directly or indirectly) to another person, without their consent, Where one person attempts to apply force, or threatens to apply force to another person.</p>
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
