<template>
    <div v-if="scores.length == 0" class="noBestScores">
        <p>There aren't any best scores yet.</p>
    </div>
    <table class="table table-striped table-bordered" v-else>
        <caption style="caption-side:top">Best in the Counting Master: </caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Average time of one answer</th>
                    <th>Mode</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in scores" :key="item.date">
                    <td>{{item.firstName}}</td>
                    <td>{{item.myTime}}</td>
                    <td>{{item.mode}}</td>
                </tr>
            </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            scores: []
        }
    },
mounted() {
    var bestScores = this.$store.state.bestScores; 
    this.scores = bestScores; 
    console.log(bestScores);      
}
}
</script>
<style scoped>
table {
    margin: 100px auto auto auto;
    max-width: 1200px;
    border: 3px solid #FFA8AE;
}
caption {
     text-align: center;
     color: #660099;
     font-size: 28px;
     font-weight: bold;
     margin: 5px 0 20px 0;
}
.noBestScores {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.noBestScores p {
    margin: 100px auto;
    font-size: 25px;
    font-weight: bold;
    color: #660099;
}
@media only screen and (min-width: 0px) and (max-width: 576px) {
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
table {
    width: 95%;
}    
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {
table {
    width: 95%;
}  
}
</style>
