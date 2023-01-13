
<template>
    <div class="quote-picker">
        <p class="quote-picker__quote">
            <span class="quote-picker__quotation-mark">&#8220;</span>
            <span>{{ quote.quote }}
                <span class="quote-picker__quotation-mark">&#8221;</span>
            </span>
        </p>
        <div class="quote-picker__author">- {{  quote.author  }}</div>
    </div>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';

    const quote = ref({
        author: '',
        quote: ''
    });
    
    const randomQuote = items => items[Math.floor(Math.random()*items.length)];

    function fetchQuotes() {
        fetch('/api/quotes')
        .then(res => { 
            res.json().then(json => {
                const random = randomQuote(json)
                quote.value = {
                    author: random.author,
                    quote: randomQuote(random.quotes)
                }
            })
        })
    };

    onBeforeMount(fetchQuotes);
</script>

<style>
.quote-picker {
    width: 100%;
    max-width: 800px;
    margin: 60px auto;
}

.quote-picker__quote {
    display: flex;
    gap: 8px;
    background-color: #94cbe6;
    text-align: left;
    font-size: 24px;
    font-family: 'Vollkorn', serif;
    line-height: 37px;
    margin: 0 auto;
    padding: 12px 8px;
    border-radius: 10px;
    justify-content: center;
}

.quote-picker__quote span:nth-child(2) {
    padding-top: 8px;
}

.quote-picker__quotation-mark {
    font-family: 'Tekollkorn', sans-serif;
    font-size: 48px;
    font-weight: 800;
}

.quote-picker__quotation-mark:first-child {
    align-self: flex-start;
}

.quote-picker__author {
    font-size: 22px;
    font-family: 'Acme';
    color: white;
    text-align: right;
    margin: 10px 8px;
}
</style>