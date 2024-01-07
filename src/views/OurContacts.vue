<template>
<div class="container">
    <div class="container_flex">
        <div>
            Нас дуже легко знайті:
        </div>
         
        <div class="container container_size_350">
            <ol >
                <li> Потягом до Ужгорода</li>
                <li> Шукайте бабу Галю - вона дорогу покаже</li>
            </ol>
        </div>

        <div>
            До зустрічі!
        </div>         
    </div>  
</div>    
</template>

<script>
    export default {
        name: "OurContacts"
    }
</script>

<style lang="scss" scoped>

.container_size_350 {
    max-width: 350px;
}
.container_flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>