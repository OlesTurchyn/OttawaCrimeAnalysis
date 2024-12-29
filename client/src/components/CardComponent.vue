<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <img :src="imgSrc" :alt="imgAlt" />
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    imgSrc: String,
    imgAlt: String,
    description: String
  });
  </script>
  
  <style scoped>
  .card {
    background-color: #1e1e1e;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card h3 {
    font-size: 1.5rem;
    color: #1e90ff;
    margin-bottom: 15px;
  }
  
  .card img {
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    margin: 10px 0;
  }
  
  .card p {
    font-size: 1rem;
    color: #a7a6a6;
    line-height: 1.5;
  }
  </style>
  