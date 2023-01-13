<template>
    <main class="monk-cat-quotes">
        <h1 class="monk-cat-quotes__title">Gato Sábio App</h1>
        <div class="monk-cat-quotes__container">
            <div class="monk-cat-quotes__bright"></div>
            <img :src="monkCatImage" class="monk-cat-quotes__image"/>            
        </div>
        <QuotePicker />
    </main>
</template>

<script setup>
import QuotePicker from "@/components/QuotePicker.vue";
import monkCatImage from "@/assets/images/monk_cat.png";
</script>

<style>

.monk-cat-quotes {
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    padding: 30px 10px;
    margin: 0 auto;
}

.monk-cat-quotes__title {
    font-size: 35px;
    text-align: center;
    font-family: 'Acme', serif;
    font-weight: 800;
    color: white;
    padding: 5px;
    border-bottom: 1px solid #b2a5be;
    z-index: 5;
}

.monk-cat-quotes__container {
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.monk-cat-quotes__bright {
    position: absolute;
    height: 0px;
    border-radius: 50%;
    box-shadow:
        0 0 100px 40px #fff,
        0 0 180px 140px #9fd8d8,
        0 0 230px 180px rgb(0, 161, 161);
}

.monk-cat-quotes__image {
    position: absolute;
    width: 100%;
    max-width: 350px;
    margin: auto;
    animation: mover 2.5s infinite  alternate;
}

@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-15px); }
}

</style>