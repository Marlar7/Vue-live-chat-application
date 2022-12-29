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
import {auth }from "../firebase/config"
export default {
    setup(){
        let displayName =ref("");
        let email= ref("");
        let password=ref("");
        let error=ref(null);
        let SingUp=async()=>{
            try{
                
                let res=await auth.createUserWithEmailAndPassword(email.value, password.value)
                if(!res){
                    throw new Error("could not create new user")
                }
                console.log(res.user);
        }catch(err){
            error.value=err.message;
        }

    }

        return{displayName ,email,password ,SingUp }
}
}
</script>
<style>

</style>


