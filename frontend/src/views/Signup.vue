<template>
    <div class="container">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="username" placeholder='username'><br>
            <input type="password" v-model="password" placeholder='password'><br>
            <input type="password"  v-model="password2" placeholder='repeat password'><br>
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            <button type="submit">Signup</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
export default {
    name:'Signup',
    data() {
        return{
            username:'',
            password:'',
            password2:'',
            errors: [],
        }
    },
    methods:{
        submitForm() {
            this.errors = []
            if (this.username === '') {
                this.errors.push('The username is missing')
            }
            if (this.password === '') {
                this.errors.push('The password is missing')
            }
            if (this.password !== this.password2) {
                this.errors.push('The passwords doesn\'t match')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }
                axios
                    .post("http://127.0.0.1:8000/api/users/", formData)
                    .then(response => {
                        toast({
                            message: 'Account created, you can now login',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 3000,
                            position: 'bottom-right',
                        })
                        this.$router.push('/login')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('An error has accured, please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script>