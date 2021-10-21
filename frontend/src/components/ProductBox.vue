<template>

    <div class="col">
        <div class="card" style="width: 18rem;">
            <img :src="product.get_thumbnail" class="card-img-top" alt="alt">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link v-bind:to="product.get_absolute_url" class="btn btn-primary">${{product.price}}</router-link>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name : 'ProductBox',
    props : {
        product : Object
    }
}
</script>