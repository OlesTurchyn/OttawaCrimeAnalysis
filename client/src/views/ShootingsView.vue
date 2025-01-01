<script setup>
import Map from "@/components/MapComponent.vue";

const crimeData = {
  mapName: "Shootings",
};
</script>

<template>
  
 
  <section>
    <h2 class="section-title">Description</h2>
    <p>A shooting refers to criminal incidents where the vitim(s) or property was reported to have been shot or shot at with a firearm.</p>
  </section>
  <h2 class="section-title">Heatmap Visualization</h2>
  <Map :mapName="crimeData.mapName" />

  <section>
    <h2>Data Source</h2>
    <p class="data-source">
      <a href="https://open.ottawa.ca/datasets/ottawa::shootings-and-firearm-discharges/about" target="_blank">Shootings and Firearm Discharges</a> between 2016-2022 from the Open Ottawa project.  
    </p>

    <p>This dataset contains shooting incidents occurrences from 2016 - 2022.
        For privacy reasons, the locations of crime occurrences have been aggregated to nearest neighbourhoods or the census tract. 
        The crime statistics published are accurate on the day that they were produced. Due to ongoing police investigations and internal data quality control efforts, this information is subject to change, including addition, deletion and reclassification of any and all data.</p>
  </section>
</template>
