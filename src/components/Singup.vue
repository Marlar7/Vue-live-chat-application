<template>
<div>
    <h2>Sing Up</h2>
    <form @submit.prevent="SingUp">
        <input type="text" placeholder="display name" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div v-if="error" class="error">{{error}}</div>
        <button>Sing Up</button>
    </form>
</div>
    
</template>
<script>
import {ref} from 'vue'

import useSingup from"../composables/useSingup"
export default {
    setup(){
        let displayName =ref("");
        let email= ref("");
        let password=ref("");
        
       let {error ,createAccount}= useSingup()
        let SingUp=async()=>{
            let res=await createAccount(email.value, password.value,displayName.value)
            if (res){
                console.log(res.user)
            }
    }

        return{displayName ,email,password ,SingUp,error }
}
}
</script>
<style>

</style>


