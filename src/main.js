import { createApp } from 'vue';
import router from './routes.js'
import App from './App.vue';
import store from './store/index.js';
import ScoreBoard from './components/ScoreBoard.vue';
import LocalScores from './components/LocalScores.vue';


const app = createApp(App);
app.component('score-board', ScoreBoard);
app.component('local-scores', LocalScores);
app.use(store);
app.use(router);

app.mount('#app');
