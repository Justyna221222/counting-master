<template>
<div class="container">
    <div v-show= "game_over">
        <score-board
            :correctAnswers="correct_answers" :incorrectAnswers="incorrect_answers" :averageTime="average_time" :mode="game"
        ></score-board>
    </div>
    <div v-show="!game_over" class="exp_board">
        <div class="header">
            <h2>Adding up to 10</h2>
            <p>Press the correct nubmer</p>
        </div>
        <div class = "example">
            <p :class="{'correct': correct_answer, 'incorrect': incorrect_answer, 'normal': normal}">{{ current_exp }}</p>
        <div v-if="winWidth < 1100" class="keyboardContainer">
            <button class="keyboardButton" @click="keyPressed1(1)"> 1 </button>
            <button class="keyboardButton" @click="keyPressed1(2)"> 2 </button>
            <button class="keyboardButton" @click="keyPressed1(3)"> 3 </button>
            <button class="keyboardButton" @click="keyPressed1(4)"> 4 </button>
            <button class="keyboardButton" @click="keyPressed1(5)"> 5 </button><br>
            <button class="keyboardButton" @click="keyPressed1(6)"> 6 </button>
            <button class="keyboardButton" @click="keyPressed1(7)"> 7 </button>
            <button class="keyboardButton" @click="keyPressed1(8)"> 8 </button>
            <button class="keyboardButton" @click="keyPressed1(9)"> 9 </button>
            <button class="keyboardButton" @click="keyPressed1(0)"> 0 </button>    
        </div>            
        </div>

    </div>
</div>

    
</template>

<script>
import { generate_adding } from '../tasks.js';
export default {
    data() {
        return {
            game: 'Adding up to 10',
            task: null,
            state: null,
            correct_answers: 0,
            incorrect_answers: 0,
            game_over: false,
            acc_time: 0,
            last_time: 0,
            correct_to_win: 4,
            average_time: '',
            winWidth: 0
        };
    },
    computed: {
       current_exp() {
           if(this.game_over) {
               return '';
           }
            let exp = this.task[2].toString()
            if (this.state == 1 && exp.indexOf('?') > -1)
            {
                return exp.replace('?', this.task[0].toString())
            } else {
                return exp;
            }

        },
        normal() {
            return this.state == 0;
        },
        correct_answer() {
            return this.state == 1;
        },
        partial_answer() {
            return this.state == 2;
        },
        incorrect_answer() {
            return this.state == 3;
        },
    },
    methods: {
        load_task() {
            this.task = generate_adding();
            this.state = 0;
        },
        keyPressed(keyEvent) {
            let answer = keyEvent.key;
            if(this.state == 1 || this.state == 3 || this.game_over) {
                return;
            }
            if(answer == this.task[0]) {
                this.state = 1;
                this.correct_answers += 1;
                setTimeout(() => this.load_next(), 1500);
            } else {
                this.state = 3;
                this.incorrect_answers +=1;
                setTimeout(() => this.load_next(), 1500);
            }
            let date = new Date()
            let answer_time = date.getTime() - this.last_time
            this.acc_time += answer_time
            this.$store.commit('setMode', this.mode);
        },
        keyPressed1(digit) {
            let answer = digit;
            if(this.state == 1 || this.state == 3 || this.game_over) {
                return;
            }
            if(answer == this.task[0]) {
                this.state = 1;
                this.correct_answers += 1;
                setTimeout(() => this.load_next(), 1500);
            } else {
                this.state = 3;
                this.incorrect_answers +=1;
                setTimeout(() => this.load_next(), 1500);
            }
            let date = new Date()
            let answer_time = date.getTime() - this.last_time
            this.acc_time += answer_time
            this.$store.commit('setMode', this.mode);
        },           
        load_next() {
            this.state = 0
            this.task = generate_adding();
            if(this.correct_answers > this.correct_to_win) {
                this.game_over = true;
                this.average_time = (this.acc_time/(this.correct_answers + this.incorrect_answers)/1000).toFixed(3);
            }
            let date = new Date()
            this.last_time = date.getTime()
        }
    },
    created() {
        this.load_task();
    },
    mounted() {
        window.addEventListener("keypress", this.keyPressed);
        let date = new Date()
        this.last_time = date.getTime()
        const windowWidth = window.innerWidth;
        this.winWidth = windowWidth;
    },
    unmounted() {
    window.removeEventListener("keypress", this.keyPressed);
  }
    
}
</script>

<style scoped>
.exp_board {
    display: flex;
    flex-direction:column;
    height: 80vh;
}
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.header {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: Arial;
    border: 5px solid #c69df9;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: url('../../public/images/pattern7.jpg');
    background-size:cover;
}
.header p {
    font-size: 20px;
    color: #151B54;
}
.header h2 {
    padding: 20px 0 0 0;
    color: #550A35;
    font-weight: bold;
}
.example {
    border-left: 5px solid #c69df9;
    border-right: 5px solid #c69df9;
    border-bottom: 5px solid #c69df9;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 120px;
    flex: 4;
}
.correct {
    color: green;
}
.incorrect {
    color: red;
}
.normal {
    color: #550A35;
}

.keyboardContainer {
    margin:50px 0 0 0;
    padding: 0;
    line-height: 0%;
}
.keyboardButton {
    font-size: 30px;
    width: 60px;
    height: 60px;
    margin: 2px;
    color: #550A35;
}
.keyboardButton:active {
    background-color: #FEBEB4;
}
@media only screen and (min-width: 0px) and (max-width: 576px) {
    .example {
        font-size: 50px;
    }
    .exp_board {
    display: flex;
    flex-direction:column;
    height: 75vh;
}
.keyboardContainer {
    align-items: center;
    justify-content: center;
}
.keyboardButton {
    font-size: 25px;
    width: 40px;
    height: 40px;
    margin: 2px;
    color: #550A35;
}
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .example {
        font-size: 50px;
    }
    .exp_board {
    display: flex;
    flex-direction:column;
    height: 75vh;
}    
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .example {
        font-size: 80px;
    }
    .exp_board {
    display: flex;
    flex-direction:column;
    height: 75vh;
}      
}
</style>