<template>
<div class='container'>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="item in cart.items"
            v-bind:key="item.product.id"
            v-bind:initialItem="item"
            v-on:removeFromCart="removeFromCart">
            <th scope="row" 
            
            >{{item.product.id}}</th>
            <td>{{item.name}}</td>
            <td>{{item.product.price}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.quantity}}</td>
            <td><button @click="removeFromCart(item)" class="delete"></button></td>
            </tr>
        </tbody>
    </table>

  <div class="column is-12 box">
    <h2 class="subtitle">Summary</h2>

    <strong>${{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items

    <hr>

    <router-link to="/checkout" class="button is-dark">Proceed to checkout</router-link>
  </div>
</div>
</template>


<script>

export default {
    name:'Cart',
    data(){
        return{
            cart:{
                items : []
            }
        }
    },
    mounted(){
        this.cart = this.$store.state.cart
    },
    methods:{
        removeFromCart(item){
            this.cart.items = this.cart.items.filter( i => i.product.id !== item.product.id)
        }
    },
    computed:{
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
    }
}
</script>