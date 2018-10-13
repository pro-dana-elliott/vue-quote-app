<template>
    <div class="comp-list-quotes">
        <div class="info">
            <div class="centered-text">
                <div class="alert">Info: Click on a Quote to delete it</div>
            </div>
        </div>
        <div class="cl-list-quotes">
            <app-quote v-for="(item,index) in quotes" :key="index" :id="index">{{item}}</app-quote>    
            <!-- @click.native="deleteQuote" -->
            <!-- click native will react to a click in the child but will run the code in the parent -->
        </div>    
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: {
            'quotes' : Array
        },
        components : {
            'appQuote': Quote
        }
    }
</script>

<style scoped>
    .comp-list-quotes {
        width: 90%;
        margin: auto;
    }

    .info {
        display: block;
        padding: 1rem 0.5rem;
    }

    .cl-list-quotes {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        margin-top: 20px;
    }

    .centered-text {
        text-align:center;
    }

    .alert {
        display: inline-block;
        padding: 1rem 0.5rem;
        background-color:deepskyblue;
        border-radius: 4px;
    }

    /*medium device*/
    @media (min-width: 40rem) {
        .cl-list-quotes {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 58rem) {
        .cl-list-quotes {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }  

    @media (min-width: 75rem) {
        .cl-list-quotes {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }  
</style>


