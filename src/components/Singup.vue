<template>
<div>
    <h2>Sing Up</h2>
    <form @submit.prevent="SingUp">
        <input type="text" placeholder="display name" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button>Sing Up</button>
    </form>
</div>
    
</template>
<script>
import {ref} from 'vue'
export default {
    setup(){
        let displayName =ref("");
        let email= ref("");
        let password=ref("");
        let SingUp=()=>{
            console.log(displayName.value)
        }

        return{displayName ,email,password ,SingUp}
    }
}
</script>
<style>

</style>


