<script setup>
</script>

<template>
  <section class="home-content">
   
    <div class="content-section">
      <div class="card">
        <h2>Purpose of This Project</h2>
        <p>
          This project focuses on mapping geospatial data for various crimes in Ottawa, including arson, assault, shootings, car thefts, and more. 
          
          <br><br>
          By visualizing these incidents on a geographic scale, the project aims to uncover spatial patterns and trends, promote public safety awareness, and provide valuable insights for policy decisions and community action. 
          
          <br><br>
          Through this geo-centric approach, the hope is to help empower residents and stakeholders with a deeper understanding of crime dynamics in Ottawa.
        </p>
      </div>
      <div class="card">
        <h2>Technologies Used</h2>
        <ul>
          <li>
            Python libraries such as geopandas and folium
          </li>
          <li>
           Jupyter notebooks data preperation and mapping
          </li>
          <li>
           Vue.js for front-end development
          </li>
        </ul>
      </div>
      <div class="card">
        <h2>Data Sources</h2>
        <ul>
          <li>
            <a href="https://open.ottawa.ca/datasets/ottawa::criminal-offences-/about" target="_blank">Criminal Offences</a>between 2017-2021 from the Open Ottawa project.  
          </li>

          <li>
            <a href="https://open.ottawa.ca/datasets/ottawa::shootings-and-firearm-discharges/about" target="_blank">Shootings and Firearm Discharges</a> between 2016-2022 from the Open Ottawa project.  
          </li>
        </ul>
      </div>
      <div class="card">
        <h2>Questions or Feedback?</h2>
        <p>Send an<a href="mailto:oleksander.turchyn@gmail.com" class="email-link">
          email</a>
        </p>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
/* General page styling */
body {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #f5f5f5;
}

/* Header section styling */
.home-header {
  background-color: #1c1c1c;
  padding: 2rem;
  text-align: center;
  border-bottom: 2px solid #333;
}
.home-header h1 {
  margin: 0;
  font-size: 2.8rem;
  color: #40a9ff;
}
.home-header p {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #ccc;
}

/* Content section styling */
.content-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
  max-width: 1200px;
  padding: 0 20px;
}
.card {
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 500px;
  width: 100%;
  text-align: left;
}
.card h2 {
  margin-bottom: 10px;
  color: #91b9f6
}
.card p, 
.card ul {
  color: #ccc;
  font-size: 1rem;
}
.card ul {
  margin-top: 10px;
  padding-left: 20px;
}
.card li {
  margin-bottom: 10px;
}

/* Link styling */
a {
  color: #40a9ff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>