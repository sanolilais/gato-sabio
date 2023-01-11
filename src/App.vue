<template>
    <p class="monk-cat-quotes_title">Gato Sábio App</p>
    <home />
    <quotePicker />

</template>

<script>
import home from './components/home.vue';
import quotePicker from './components/quotePicker.vue';

export default {  
  components: {
    home,
    quotePicker
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Carter+One&display=swap');


body {
  background-color: #b5d6f3;
}

.monk-cat-quotes_title {
  font-size: 35px;
  text-align: center;
  font-family: 'Acme', 'EB Garamond', serif;
  font-weight: 800;
  padding:5px;
  border-bottom: 1px solid #b2a5be;
  }
</style>