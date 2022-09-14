<template>
<div class="container">
    <div v-show= "game_over">
        <score-board
            :correctAnswers="correct_answers" :incorrectAnswers="incorrect_answers" :averageTime="average_time" :mode="game"
        ></score-board>
    </div>
    <div v-show="!game_over" class="exp_board">
        <div class="header">
            <h2>Multiply to 50</h2>
            <p>Press the correct nubmer</p>
        </div>
        <div class = "example">
            <p :class="{'correct': correct_answer, 'incorrect': incorrect_answer, 'normal': normal}">{{ current_exp }}</p><br>
            <div class="mistake" v-show="mistake">
                <h3>Correct answer: </h3>
                <p>{{ correctExp }}</p>
            </div>
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
import { generate_multiply50 } from '../tasks.js';
export default {
    data() {
        return {
            game: 'Multiply up to 50',
            task: null,
            state: null,
            correct_answers: 0,
            current_answer: "",
            incorrect_answers: 0,
            game_over: false,
            acc_time: 0,
            last_time: 0,
            correct_to_win: 4,
            average_time: 0,
            winWidth: 0
        };
    },
    computed: {
       current_exp() {
           if(this.game_over) {
               return '';
           }
            let exp = this.task[2].toString()
            if (this.state == 2 && exp.indexOf('?') > -1 && this.task[0].toString().length > 1) {
                return exp.replace('?', this.current_answer);
            }
            if (this.state == 1 && exp.indexOf('?') > -1)
            {
                return exp.replace('?', this.task[0].toString());
            }
            if (this.state == 3) {
                return exp.replace('?', this.current_answer +' ?');
            }
             else {
                return exp;
            }

        },
        correctExp() {
            let d1 = this.task[0].toString();
            let d2 = this.task[1].toString();
            return d2 + " x " + d1 + " = " + d1*d2;
        },
        mistake() {
           return this.state == 3;
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
        }
    },
    methods: {
        load_task() {
            this.task = generate_multiply50();
            this.state = 0;
        },
        keyPressed(keyEvent) {
            let date = new Date();
            let answer_time = date.getTime() - this.last_time;
            this.acc_time += answer_time;
            let answer = keyEvent.key;
            if(this.state == 1 || this.state == 3 || this.game_over) {
                return;
            }
            if(this.task[0].toString().length == 1) {
                this.current_answer = answer;
                if(this.current_answer == this.task[0]) {
                    this.state = 1;
                    this.correct_answers += 1;
                    setTimeout(() => this.load_next(), 1500);
                } else {
                    this.state = 3;
                    this.incorrect_answers +=1;
                    this.current_answer = '';
                    setTimeout(() => this.load_next(), 3000);
                }
            }
            
            if(this.task[0].toString().length > 1 && this.current_answer.toString().length == 0) {
                let firstLetter = this.task[0].toString().substring(0, 1); // first digit of task
                if(answer == firstLetter) {
                    this.current_answer += answer;
                    this.state = 2;
                    return;
                } else {
                    this.state = 3;
                    this.incorrect_answers += 1;
                    this.current_answer = '';
                    setTimeout(() => this.load_next(), 3000);
                }
            } else if(this.task[0].toString().length > 1)  {
                this.current_answer += answer;
                if(this.current_answer == this.task[0]) {
                    this.state = 1;
                    this.correct_answers += 1;
                    setTimeout(() => this.load_next(), 1500);
                } else {
                    this.state = 3;
                    this.incorrect_answers += 1;
                    this.current_answer = '';
                    setTimeout(() => this.load_next(), 3000);
                }
            }
            this.$store.commit('setMode', this.mode);

        },
        keyPressed1(digit) {
            let date = new Date();
            let answer_time = date.getTime() - this.last_time;
            this.acc_time += answer_time;
            let answer = digit;
            if(this.state == 1 || this.state == 3 || this.game_over) {
                return;
            }
            if(this.task[0].toString().length == 1) {
                this.current_answer = answer;
                if(this.current_answer == this.task[0]) {
                    this.state = 1;
                    this.correct_answers += 1;
                    setTimeout(() => this.load_next(), 1500);
                } else {
                    this.state = 3;
                    this.incorrect_answers +=1;
                    this.current_answer = '';
                    setTimeout(() => this.load_next(), 3000);
                }
            }
            
            if(this.task[0].toString().length > 1 && this.current_answer.toString().length == 0) {
                let firstLetter = this.task[0].toString().substring(0, 1); // first digit of task
                if(answer == firstLetter) {
                    this.current_answer += answer;
                    this.state = 2;
                    return;
                } else {
                    this.state = 3;
                    this.incorrect_answers += 1;
                    this.current_answer = '';
                    setTimeout(() => this.load_next(), 3000);
                }
            } else if(this.task[0].toString().length > 1)  {
                this.current_answer += answer;
                if(this.current_answer == this.task[0]) {
                    this.state = 1;
                    this.correct_answers += 1;
                    setTimeout(() => this.load_next(), 1500);
                } else {
                    this.state = 3;
                    this.incorrect_answers += 1;
                    this.current_answer = '';
                    setTimeout(() => this.load_next(), 3000);
                }
            }
            this.$store.commit('setMode', this.mode);

        },
        load_next() {
            this.state = 0
            this.current_answer = '';
            this.task = generate_multiply50();
            if(this.correct_answers > this.correct_to_win) {
                this.game_over = true;
                this.average_time = (this.acc_time/(this.correct_answers + this.incorrect_answers)/1000).toFixed(3)
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
        let date = new Date();
        this.last_time = date.getTime();
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
    position: relative;
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
.mistake {
    position:absolute;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 50px;
}
.mistake p {
    color: green;
    font-size: 60px;
    font-weight: bold;
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
.keyboardButton:hover {
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
    .mistake {
        position:absolute;
        top: 60px;
        margin: 0;
        padding: 0;
    }
    .mistake h3 {
        font-size: 20px;
    }
    .mistake p {
        font-size: 25px;
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
.keyboardButton {
        font-size: 25px;
        width: 40px;
        height: 40px;
        margin: 2px;
        color: #550A35;
    } 
    .mistake {
        position:absolute;
        top: 70px;
        margin: 0;
        padding: 0;
    }
    .mistake h3 {
        font-size: 20px;
    }
    .mistake p {
        font-size: 25px;
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
.keyboardContainer {
    margin:0;
}   
.keyboardButton {
        font-size: 25px;
        width: 40px;
        height: 40px;
        margin: 2px;
        color: #550A35;
    }  
    .mistake {
        position:absolute;
        top: 70px;
        margin: 0;
        padding: 0;
    }
    .mistake h3 {
        font-size: 20px;
    }
    .mistake p {
        font-size: 25px;
    } 
}
</style>