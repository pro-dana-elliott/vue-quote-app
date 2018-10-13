<template>
    <div class="app-container">
        <h1 class="text-center">Quotes App</h1>
        <app-progress-bar :numberOfQuotes="quoteArray.length" :maxQuotes="maxQuotes" ></app-progress-bar>
        <app-add-quote :numberOfQuotes="quoteArray.length" :maxQuotes="maxQuotes"></app-add-quote>
        <app-list-quotes :quotes="quoteArray"></app-list-quotes>
    </div>
</template>

<script>
    import progressBar from './components/progressBar.vue';
    import addQuote from './components/addQuote.vue';
    import listQuotes from './components/listQuotes.vue';

    import { eventBus } from './main';

    export default {
        data() {
          return {
            maxQuotes: 10,  
            quoteArray: ['just a quote to start with something']
          }
        },
        components: {
          'appProgressBar' : progressBar,
          'appAddQuote' : addQuote,
          'appListQuotes' : listQuotes
        },
        created() {
            eventBus.$on('addNewQuote', (quote) => {
                this.quoteArray.push(quote);
            });

            eventBus.$on('deleteQuote', (id) => {
                this.quoteArray.splice(id,1);
            });
        }


    }
</script>

<style>
.app-container {
    display:flex;
    flex-direction: column;
}

.text-center {
    text-align: center;
}

</style>