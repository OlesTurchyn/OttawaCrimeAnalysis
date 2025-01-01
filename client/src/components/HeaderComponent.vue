<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h3>
      Mapping crime patterns in Ottawa using publicly available geospatial data
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 400;
  font-size: 1.6rem;
  position: relative;
  top: -10px;
  color: white;
}

h3 {
  font-size: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
