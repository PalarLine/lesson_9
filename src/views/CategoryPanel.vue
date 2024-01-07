<template>
<div class="container">
    <div class="item-container">
        <div v-for="goods in selectedGoodsCategory" :key="goods.category" class="flex size">
        
            <div class="image">
                <img :src="goods.productImage" alt="image">
            </div>
        
            <div class="description">
                <div>
                    {{ goods.productTitle }}
                </div>
                <div>
                    {{ goods.productDescription }}
                </div>
                <div>
                    {{ goods.price }} $
                </div>   
            </div> 
        </div>          
    </div>
    <button @click="onClick">На Головну</button>
</div>
</template>

<script>
import { mapGetters } from "vuex"
    export default {
        name: "CategoryPage",

        data() {
            return {
                selectedGoodsCategory: {}
            }
        },

        computed: {
            ...mapGetters(['getGoodsByCategory']),
            currentCategory() {
                
                 return this.$route.params.category 
               
            }
        },
        created () {
           
            this.selectedGoodsCategory = this.getGoodsByCategory(this.currentCategory)   
        },
        methods: {
            onClick() {
                this.$router.push({
                name: 'home',
            })
                
            }
        },
    }
</script>

<style lang="scss" scoped>

.item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 2px;

}
.flex {
    display: flex;
    justify-content: space-between;
    
}
.size {
    width: 250px;
    box-shadow: inset 0 0 2px rgb(35, 34, 34);
}

.image {
    width: 50%;
    padding: 2px;    
    height: 100px;      
}
img {
    width: 100%;
    height: 100%;
    object-fit: contain;    
}
.description {
    padding: 2px;
    width: 145px;
    font-size: 12px;
}
button {
    margin-top: 5px;
}


</style>