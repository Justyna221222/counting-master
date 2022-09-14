<template>
    <div class="box">
        <div class="boxElement addTo10">
            <img src="images/pattern1.jpg">
            <h2><router-link to="/addTo10">Adding up to 10</router-link></h2>
        </div>
        <div class="boxElement multiplyTo50">
            <img src="images/pattern2.jpg">
            <h2><router-link to='/multiplyFifty'>Multiply to 50</router-link></h2>
        </div> 
    </div>
    <div class="box">  
        <div class="boxElement multiplyTo100">
            <img src="images/pattern3.jpg">
            <h2><router-link to='/multiplyHundred'>Multiply to 100</router-link></h2>
        </div>  
        <div class="boxElement divide">
            <img src="images/pattern4.jpg">
            <h2><router-link to='/DivideHundred'>Divide to 100</router-link></h2>
        </div>  
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: row;
    justify-content: center;

}
h2 {
    font-family: Arial;
    font-size: 40px;
    font-weight: bold;
    background-color: rgb(255, 255, 255, 0.9);
    padding: 5px;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    color: #6D304F;
}
h2:hover {
    cursor: pointer;
}
a {
    text-decoration: none;
    color: #6D304F;
}
.boxElement {
    margin: 50px 50px;
    width: 450px;
    height: 250px;
    overflow: hidden;
    padding: 0;
    border: 2px solid #990066;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-out;
}
.boxElement img {
    width: 450px;
    height: 250px;
    transition-duration: 3s;
    margin: 0 auto;
    display: block;
}
.boxElement img:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    z-index: 0;
    cursor: pointer;
}
@media only screen and (min-width: 0px) and (max-width: 576px) {

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}    
.boxElement {
    margin: 10px;
    width: 95%;
    height: 130px;
    overflow: hidden;
    padding: 0;
}
h2 {
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    background-color: rgb(255, 255, 255, 0.9);
    padding: 5px;
    z-index: 1;
    position: absolute;
    color: #6D304F;
}
}
@media only screen and (min-width: 577px) and (max-width: 768px) {   
.boxElement {
    margin: 10px;
    height: 200px;
    overflow: hidden;
    padding: 0;
}
h2 {
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    background-color: rgb(255, 255, 255, 0.9);
    padding: 5px;
    z-index: 1;
    position: absolute;
    color: #6D304F;
}
  
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {

    
}
</style>