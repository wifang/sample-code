import Vue from 'vue';
import Modal from './Modal.vue';
import moment from 'moment-timezone';
import VueMoment from 'vue-moment';

import './../node_modules/@zendeskgarden/css-variables/dist/index.css';
import './../node_modules/@zendeskgarden/css-bedrock/dist/index.css';
import './../node_modules/@zendeskgarden/css-utilities/dist/index.css';
import './../node_modules/@zendeskgarden/css-buttons/dist/index.css';
import './../node_modules/@zendeskgarden/css-forms/dist/index.css';
import './../node_modules/@zendeskgarden/css-grid/dist/index.css';
import './../node_modules/@zendeskgarden/css-pagination/dist/index.css';

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

new Vue( {
  render: (h) => h(Modal),
}).$mount('#app');
