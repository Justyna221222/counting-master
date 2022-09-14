<template>
<div class="container1">
        <div>  
        </div>
        <div class="header">
            <the-header></the-header>
        </div>
        <div>
            <router-view></router-view>
        </div>
</div>  
</template>

<script>
    import TheHeader from './components/TheHeader.vue'
    export default {
        components: {
            TheHeader,
        },
        data() {
            return {
                
            };
        }
    };
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.header {
    display: block;
    width: 100%;
}
p {
    color: black;
}

.route-enter-from {}
.route-enter-active {

}
.route-enter-to {}

.route-leave-active {
    animation: slide-scale 0.4s ease-in; 
}

@keyframes slide-scale {
    0% {
        transform: translateX(0) scale(1);
    }
    70% {
        transform: translateX(-120px) scale(1.1);
    }
    100% {
        transform: translateX(-150px) scale(1);
    }
}
</style>