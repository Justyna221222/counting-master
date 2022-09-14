import { createStore } from 'vuex';

const appStore = createStore({
    state() {
        return {
            bestScores: [],
            mode: ''
        };
    },
    mutations: {
        setScores(state, items) {
            state.bestScores = items;
        },
        setMode(state, gameType) {
            state.mode = gameType;
        }
    },
    actions: {

    }
});


export default appStore;