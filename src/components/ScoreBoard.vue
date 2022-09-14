<template>
    <div class="board" v-if="!saveScore">
        <h3>Your score:</h3> <hr>
        <p>Correct answers: <span class="score"> {{ correctAnswers }} </span></p>
        <p>Incorrect answers: <span class="score"> {{ incorrectAnswers }} </span></p>
        <p>Average time: <span class="score">{{ averageTime }}  s.</span></p>
        <router-link type="button" class="button btn btn-primary" to="/">Home</router-link>
        <button v-on:click="saveS()" type="button" class="button btn btn-primary">Save your score</button>
    </div>
    <div v-if="saveScore" class="scores">
        <local-scores :time="averageTime" :gameType="mode"></local-scores>
    </div>
</template>

<script>
export default {
    data() {
        return {
            saveScore: false,
            bestItems: []
        };
    },
    methods :{
        saveS() {
            console.log(this.mode);
            this.saveScore = true;
            this.bestItems = this.$store.state.bestScores;
        }
    },
    props: ['correctAnswers', 'incorrectAnswers', 'averageTime', 'mode']
};
</script>

<style scoped>
.board {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 10% auto;
    padding: 30px;
    font-size: 25px;
    width: 400px;
    min-height: 300px;
    border: 5px solid #c69df9;
    border-radius: 15px;
    background-image: url('../../public/images/pattern5.jpg');
    background-repeat:no-repeat;
    background-position: center;
    background-size: auto;
}
h3 {
    font-size: 30px;
    color: #990000;
    font-weight: bold;
}
.score {
    font-weight: bold;
    color: #990000;
}
.button {
    margin: 15px 30px 0px 30px;
    background-color: #660099;
    border: 1px solid black;
    font-size: 18px;
    min-width: 200px;
}
.button:hover {
    background-color:#9966CC;
}
@media only screen and (min-width: 0px) and (max-width: 576px) {
    .board {
    padding: 25px;
    font-size: 25px;
    width: 300px;
    min-height: 300px;
}
.board h3 {
    font-size: 25px;
    color: #990000;
    font-weight: bold;
}
.board p {
    font-size: 20px;
}
.button {
    margin: 15px 30px 0px 30px;
    background-color: #660099;
    border: 1px solid black;
    font-size: 17px;
    min-width: 200px;
}

}
</style>