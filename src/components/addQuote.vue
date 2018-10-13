<template>
    <form class="comp-add-quote">
        <div class="form-group-txt-add">
            <label for="txt-add">Quote</label>
            <textarea id="txt-add" v-model="newQuote" rows="3" @keyup.enter="addQuote" :disabled="isQuoteMaxed"></textarea>
        </div>
        <div>
            <button @click.prevent="addQuote" id="btn-add" :disabled="isQuoteMaxed">Add Quote</button> 
        </div>
    </form>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            'numberOfQuotes' : { 
                type: Number,
                default: 0
                },
            'maxQuotes': { 
                type: Number,
                default: 1
                }
        },
        data() {
            return {
                newQuote: ''
            }
        },
        methods: {
            addQuote() {
                if( this.numberOfQuotes < this.maxQuotes){
                    if (this.newQuote.length > 0){
                        eventBus.addQuoteEvent(this.newQuote);
                        this.newQuote = '';
                    }
                }
                else {
                    alert("Too many Quotes! Please delete some before adding new ones!");
                }
            }
        },
        computed: {
            isQuoteMaxed() {
                return (this.numberOfQuotes >= this.maxQuotes);
            }
        }
    }
</script>

<style scoped>
.comp-add-quote {
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.form-group-txt-add {
    display:flex;
    flex-direction: column;
    width: 80%;
}
.form-group-txt-add label {
    font-weight:  bold;
}

#txt-add {
    border-radius: 4px; 
    /* background-color: red !important;
    opacity: 1 !important; */
}

#btn-add {
    background-color: rgb(83, 141, 218);
    border-radius: 4px;
    line-height: 2rem;
    margin: 8px 0;


}

#btn-add:disabled {
    background-color: lightgray;
}

#txt-add:disabled {
    background: lightgray !important;
    /* opacity: 1 !important; */
}


</style>

