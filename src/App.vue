<template>
    <p class="monk-cat-quotes_title">Gato Sábio App</p>
    <home />

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
@import url('https://fonts.googleapis.com/css2?family=Acme&family=EB+Garamond:wght@600;700;800&display=swap');

.monk-cat-quotes_title {
  font-size: 35px;
  text-align: center;
  font-family: 'Acme', 'EB Garamond', serif;
  font-weight: 800;
  padding: 25px;
  border-bottom: 2px solid #e4e1e7;
  }
</style>