import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './components/TheHome.vue';
import LocalScores from './components/LocalScores.vue';
import AddTo10 from './components/AddTo10.vue';
import MultiplyFifty from './components/MultiplyFifty.vue';
import MultiplyHundred from './components/MultiplyHundred.vue';
import DivideHundred from './components/DivideHundred.vue';
import TheScore from './components/TheScore.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: TheHome},
        {path: '/score', component: LocalScores},
        {path: '/bestScores', component: TheScore},
        {path: '/addTo10', component: AddTo10},
        {path: '/multiplyFifty', component: MultiplyFifty},
        {path: '/multiplyHundred', component: MultiplyHundred},
        {path: '/divideHundred', component: DivideHundred},
    ]
});

export default router;