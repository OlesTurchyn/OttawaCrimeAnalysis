<script setup>
import Map from "@/components/MapComponent.vue";

const crimeData = {
  mapName: "HitAndRun",
};
</script>

<template>
 
  <section>
    <h2 class="section-title">Description</h2>
    <h3>Failure to stop after accident </h3>
    <p>320.16 (1) Everyone commits an offence who operates a conveyance and who at the time of operating the conveyance knows that, or is reckless as to whether, the conveyance has been involved in an accident with a person or another conveyance and who fails, without reasonable excuse, to stop the conveyance, give their name and address and, if any person has been injured or appears to require assistance, offer assistance.</p>
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
