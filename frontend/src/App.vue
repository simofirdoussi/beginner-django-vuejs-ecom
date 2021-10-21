<template>
<div id="wrapper">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to='/' class="navbar-brand" href="#">Django-ecom</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>

        </ul>

        <template v-if="$store.state.isAuthenticated" >
          <router-link to='/my-account' type="button" class="btn btn-light">My Account</router-link>
        </template>
        <template v-else>
          <router-link to='/login' type="button" class="btn btn-light">Login</router-link>  
        </template>
        
        <router-link to='/cart' type="button" class="btn btn-info">Cart({{cartTotalLength}})</router-link>
      </div>
    </div>
  </nav>
  <div class="progress">
    <div class="progress-bar " v-bind:class="{'progress-bar-striped progress-bar-animated': $store.state.loading }" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
  </div>

  <section>
    <router-view/>
  </section> 
  
  <footer class="text-center text-lg-start bg-light text-muted">
      <p class="has-text-centered">Copyright (c) 2021</p>
  </footer>
</div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        cart: {
          items: [],
        },
      }
    },
    beforeCreate(){
      this.$store.commit('initializeStorage')
    },
    mounted(){
    this.cart = this.$store.state.cart
    },
    computed:{
      cartTotalLength(){
        let totalLength = 0
        for (let i=0; i<this.cart.items.length;i++){
          totalLength += this.cart.items[i].quantity
        }
        return totalLength
      }
    },
  }
</script>

<style lang="scss">
@import '../node_modules/bootstrap';
</style>
