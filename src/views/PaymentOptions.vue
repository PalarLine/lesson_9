<template>
<div class="container ">
    <div class="container_flex">
        <div>
            Вранці гроші – увечері стільці!
        </div>
        <div class="container_size_350">
            <ul>
                <li> <span>Переказ на картку </span> </li>
                <li> <span>Оплата при отриманні </span> </li>
            </ul>
        </div>
        
    </div>
</div>    
</template>

<script>
    export default {
        name: "PaymentOptions",
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