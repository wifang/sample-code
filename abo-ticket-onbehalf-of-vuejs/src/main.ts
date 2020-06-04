import Vue from 'vue';
import App from './App.vue';

import './../node_modules/@zendeskgarden/css-variables/dist/index.css';
import './../node_modules/@zendeskgarden/css-bedrock/dist/index.css';
import './../node_modules/@zendeskgarden/css-utilities/dist/index.css';
import './../node_modules/@zendeskgarden/css-buttons/dist/index.css';
import './../node_modules/@zendeskgarden/css-forms/dist/index.css';
import './../node_modules/@zendeskgarden/css-grid/dist/index.css';
import './../node_modules/@zendeskgarden/css-tables/dist/index.css';
import './../node_modules/@zendeskgarden/css-tooltips/dist/index.css';
import './../node_modules/@zendeskgarden/css-modals/dist/index.css';



Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
