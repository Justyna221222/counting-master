<template>
    <div class="container">
        <h2>Counting master</h2>
        <div>
            <div class="buttonElement">
                <router-link to="/" type="button" class="button btn btn-primary">Home</router-link>
            </div>
            <div class="buttonElement">
                <router-link to="/bestScores" type="button" class="button btn btn-primary">Score</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
h2 {
    font-family: 'Merienda', cursive;
    padding: 30px;
    font-size: 45px;
    color: #990066;
}
.button {
    margin: 30px;
    padding: 8px 15px;
    background-color: #660099;
    border: 1px solid black;
    font-size: 20px;
    min-width: 100px;
}
.button:hover {
    background-color:#9966CC;
}
.buttonElement {
    float: left;
}
@media only screen and (min-width: 0px) and (max-width: 576px) {

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0 30px 0;
}
h2 {
    padding: 10px;
    font-size: 30px;
}
.button {
    margin: 10px;
    background-color: #660099;
    border: 1px solid black;
    font-size: 17px;
    min-width: 80px;
}    

}    
@media only screen and (min-width: 577px) and (max-width: 768px) { 
    .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0 30px 0;
}
h2 {
    padding: 10px;
    font-size: 30px;
}
.button {
    margin: 10px;
    background-color: #660099;
    border: 1px solid black;
    font-size: 17px;
    min-width: 80px;
}       
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 0 30px 0;
}
h2 {
    padding: 10px;
    font-size: 30px;
}
.button {
    margin: 10px;
    background-color: #660099;
    border: 1px solid black;
    font-size: 17px;
    min-width: 80px;
}   
}
</style>