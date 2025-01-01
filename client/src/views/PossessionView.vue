<script setup>
import Map from "@/components/MapComponent.vue";

const crimeData = {
  mapName: "Possession",
};
</script>

<template>
 
  <section>
    <h2 class="section-title">Description</h2>
    <p>
      (3) For the purposes of [the Controlled Drugs and Substances Act],

      (a) a person has anything in possession when he has it in his personal possession or knowingly

      (i) has it in the actual possession or custody of another person, or

      (ii) has it in any place, whether or not that place belongs to or is occupied by him, for the use or benefit of himself or of another person; and

      (b) where one of two or more persons, with the knowledge and consent of the rest, has anything in his custody or possession, it shall be deemed to be in the custody and possession of each and all of them.
    </p>
  </section>

  <h2 class="section-title">Heatmap Visualization</h2>
  <h3>Geographic visualization of incident occurences between 2017-2021</h3>
  <Map :mapName="crimeData.mapName" />
  
  <section>
    <h2>Data Source</h2>
    <p class="data-source">
      <a href="https://open.ottawa.ca/datasets/ottawa::criminal-offences-/about" target="_blank">Criminal Offences</a>between 2017-2021 from the Open Ottawa project.  
    </p>
    <p>This data includes all founded Criminal Code of Canada offences reported to the Ottawa Police years from 2017 to 2021. Offences have been categorized according to the Uniform Crime Reporting (UCR) Survey. For privacy reasons, the location of crime occurrences has been geomasked to the nearest intersection.</p>
  </section>


</template>
