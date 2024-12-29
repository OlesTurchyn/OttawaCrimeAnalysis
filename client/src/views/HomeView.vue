<script setup>
</script>

<template>
  <section class="home-content">
   
    <div class="content-section">
      <div class="card">
        <h2>Purpose of This Project</h2>
        <p>
          The purpose of this project is to analyze publicly available data on crimes in Ottawa, provide insights into crime trends, and help promote public safety awareness. 
          By examining data such as shootings, bike thefts, and hate crimes, we aim to shed light on patterns that could inform policy decisions and community actions.
        </p>
      </div>
      <div class="card">
        <h2>What You’ll Find Here</h2>
        <ul>
          <li>
            Interactive heatmaps showing the concentration of specific crime types across Ottawa.
          </li>
          <li>
            Temporal analyses of crimes by year, month, day, and hour.
          </li>
          <li>
            Detailed breakdowns for different crime categories like shootings, bike theft, and hate crimes.
          </li>
        </ul>
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
  color: #178ae9;
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