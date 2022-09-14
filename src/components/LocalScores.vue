<template>
<div class="container">
    <table class="table table-striped table-bordered" v-if="added">
        <caption style="caption-side:top">Best in the Counting Master: </caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Average time of one answer</th>
                    <th>Mode</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.firstName}}</td>
                    <td>{{item.myTime}}</td>
                    <td>{{item.mode}}</td>
                </tr>
            </tbody>
    </table>
    <div v-if="!added" class="saveScore">
        <p>Your average time of one answer: <span>{{ this.time }}</span></p>
        <input v-model="name" placeholder="Enter your name">
        <button v-on:click="addToScores()" class="buttonSave">Save</button>
    </div>
</div>
</template>

<script>
export default {
    props: ['time', 'gameType'],
    data() {
        return {
        name: '',
        items: [],
        added: false, 
        size: 5,
        allScores: null      
        }

    },
    computed: {
        canAdd() {
            if(this.added) {
                return false;
            }
            if(this.time == -1) {
                return false;
            }
            if(this.items.length < this.size) {
                return true;
            }
            else if(this.time < this.items[this.items.length - 1].time) {
                return true;
            } else {
                return false;
            }
        },
    },
    mounted() {
        this.loadScores();
        console.log(this.gameType);
    },
    methods: {
        addToScores() { 
            let date = new Date();
            let today = date.getDate() + '.' + date.getMonth() + "." + date.getFullYear();
            let pushNew =  true;
            /*for(let record in this.items) {
               if(record.date == today && record.time > this.time) {
                    record.time = this.time;
                    pushNew = false;
                    break;
              }
            }*/
            var bestScores = this.items;
            if(pushNew) {
                //let gameType = this.$store.state.mode;
                bestScores.push({firstName: this.name, myTime: this.time, date: today, mode: this.gameType, id: date})
                console.log(this.gameType);
                console.log(this.items);
            }
            bestScores.sort((a, b) => {
                if (parseFloat(a.myTime) < parseFloat(b.myTime)) {
                     return -1;
                }
                if (parseFloat(a.myTime) > parseFloat(b.myTime)) {
                     return 1;
                }
                     return 0;
                 })
            if(bestScores.length > this.size) {
                bestScores = bestScores.slice(0, this.size);
            }
            if(this.allScores == null) {
                this.allScores = {};
            }
            this.$store.commit('setScores', bestScores);
            this.items = bestScores;
            this.added = true;
        },
        loadScores() {
            this.items = this.$store.state.bestScores;
                
        
      
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.saveScore {
    margin: 100px auto;
    padding: 40px;
    font-size: 20px;
    border: 10px solid transparent;
    border-image: url('../../public/images/pattern5.jpg') 30 stretch;
}
.saveScore span {
    font-weight: bold;
}

table {
    margin: 100px auto auto auto;
    border: 3px solid #FFA8AE;
}
caption {
     text-align: center;
     color: #660099;
     font-size: 28px;
     font-weight: bold;
     margin: 5px 0 20px 0;
}
.buttonSave {
    margin: 15px 30px 0px 30px;
    background-color: #660099;
    border: 1px solid black;
    padding: 5px;
    border-radius: 3px;
    font-size: 18px;
    color: white;
    min-width: 100px;
}
.buttonSave:hover {
    background-color:#9966CC;
}
@media only screen and (min-width: 0px) and (max-width: 576px) {
.saveScore {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 100px auto;
    padding: 20px;
    font-size: 19px;
    border: 10px solid transparent;
    border-image: url('../../public/images/pattern5.jpg') 30 stretch;
}
.saveScore span {
    font-weight: bold;
    width: 90%;
}
.saveScore input {
    font-size: 17px;
    width: 90%;
} 
table {
    width: 95%;
}
caption {
     font-size: 20px;
}  
table th {
    font-size: 15px;
} 
table td {
    font-size: 14px;
}
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .saveScore {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 100px auto;
    padding: 20px;
    font-size: 19px;
    border: 10px solid transparent;
    border-image: url('../../public/images/pattern5.jpg') 30 stretch;
}
.saveScore span {
    font-weight: bold;
    width: 90%;
}
.saveScore input {
    font-size: 17px;
    width: 90%;
}      
}
</style>