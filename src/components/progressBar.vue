<template>
    <div class="comp-progress">
        <h2 class="text-center">Quotes Added</h2>
        <div class="bar color0">
            <span class="text-center" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    :style="{width:progressPercent + '%'}">
                {{numberOfQuotes}} / {{maxQuotes}}
            </span>
        </div> 
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            'numberOfQuotes': { 
                type: Number,
                default: 1
                },
            'maxQuotes': { 
                type: Number,
                default: 10
                }
        },
        computed: {
            progressPercent() {
                return (this.numberOfQuotes / this.maxQuotes) * 100;
            }
        }
    }
</script>

<style scoped>
.comp-progress {
    display:flex;
    flex-direction: column;
}

h2 {
    font-size:1rem;
}

.bar {
	margin: 5px 0 3px;
	border: 6px solid #333;
	background: #333;
	overflow: hidden;
	border-radius: 8px;
	/* -moz-border-radius: 50px; */
	/* -webkit-border-radius: 50px; */
	box-shadow: 1px 1px 1px #777;
	/* -moz-box-shadow: 1px 1px 1px #777; */
	/* -webkit-box-shadow: 1px 1px 1px #777; */
    width: 90%;
    margin: auto;
}
.bar > span {
	display: block;
	height: 20px;
	border-radius: 5px;
    min-width: 40px;
	/* -moz-border-radius: 5px; */
	/* -webkit-border-radius: 5px; */
}

.color0 > span {
	background-color: rgb(83, 141, 218);
}


</style>

