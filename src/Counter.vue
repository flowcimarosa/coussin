<template>
    <div class="counter impair">
        <h1>Combien d'oreillers dans votre vie ?</h1>
        <div class="coussin">
            <img src="./assets/1.png" v-show="count == 1">
            <img src="./assets/2.png" v-show="count == 2">
            <img src="./assets/3.png" v-show="count == 3">
            <img src="./assets/4.png" v-show="count == 4">
            <img src="./assets/5.png" v-show="count == 5">
            <img src="./assets/6.png" v-show="count == 6">
            <img src="./assets/7.png" v-show="count == 7">
            <img src="./assets/8.png" v-show="count == 8">
            <img src="./assets/9.png" v-show="count == 9">
            <img src="./assets/10.png" v-show="count == 10">
        </div>
        <div class="btn_counter">
            <button class="increment_btn" @click="decrement" v-if="count != '1'">-</button>
            <p>{{ count }}</p>
            <button class="increment_btn" @click="increment" v-if="count != '10'">+</button>
        </div>
    </div>
</template>

<script>
import NotificationsStore from "./store/StoreNotifications"
export default {
    data () {
        return {
            state: NotificationsStore.state
        }
    },
    computed: {
        count: function () { return this.state.count }
    },
    methods: {
        increment () {
            NotificationsStore.increment()
        },
        decrement () {
            NotificationsStore.decrement()
        }
    }
}
</script>

<style>
    /*** Compteur de cousins - Block ***/
    .counter{
        height: 100vh;
	    width: 100vw;
	    position: absolute;
	    left: 0;
	    top: 0;
    }

    .pair{
        background-color: #fd79a8;
    }

    .impair{
        background-color: #fff;
    }

    /*** Titre ***/

    h1{
        color: #d35400;
        font-family: sans-serif;
        margin-left: 5%;
        margin-bottom: 15%;
    }

    /*** Images coussins - Block ***/

    .coussin{
        margin-bottom: 15%;
    }

    img{
        width: 100%;
    }

    /*** Compteur boutton - Block ***/

    .btn_counter{
        padding: 5%;
        display: flex;
    }

    button, p{
        flex: 1 2 auto;
    }

    button{
        border-radius: 50%;
    }

    p{
        color: #d35400;
        font-weight: bold;
        font-size: 1.5em;
        text-align: center;
    }
</style>