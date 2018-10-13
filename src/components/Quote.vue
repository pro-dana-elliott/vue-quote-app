<template>
    <div class="panel" @click="deleteItem">
        <div class="panel-body quote">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
         'id': Number
    },
    methods: {
        deleteItem() {
            eventBus.deleteQuoteEvent(this.id);
        }
    },

}
</script>

<style scoped>
    .panel {
        display: inline-block;
        border: 1px solid #6e6e6e;
        border-radius: 4px;
        /* margin: 10px; */
    }

    .panel-body {
        font-family:'Arizonia','Courier New', Courier, monospace;
        font-size: 24px;
        color: #6e6e6e;
        padding:1rem;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
    
</style>






