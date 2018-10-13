import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    addQuoteEvent(quote) {
      this.$emit('addNewQuote', quote);
    },
    deleteQuoteEvent(id) {
      this.$emit('deleteQuote',id);
    }
  }
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

