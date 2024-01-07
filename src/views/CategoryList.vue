<template>
<div class="container">
    <div class="container_flex">  
        <ul>
            <li v-for="category in getCategoriesList"
                :key="category"
                class="container_size_350"
                @click='onClick(category)'>
                    {{ category }}
            </li>
        </ul>      
        
    </div>
</div>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "CategoryList",

        computed: {
            ...mapGetters(['getCategoriesList'])
        },
        created () {
            this.loadDataList()
        },
        methods: {
            ...mapActions(['loadDataList']),
            onClick(category) {
                this.$router.push({
                    name: 'category',
                    params: {
                        category: category,
                    }
                })
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>
div {
    cursor: pointer;
}

</style>