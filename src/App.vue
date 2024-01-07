<template>
  
  <div class="container"> 
    <nav class="container_text_center">
    <router-link to="/">Головна</router-link> |    
    <router-link to="/categories">Магазин</router-link> |   
    <router-link to="/payment">Правила оплати</router-link> |   
    <router-link to="/contacts">Контакти</router-link> 
  </nav>
  </div>
    
  <router-view />
</template>

<style lang="scss">
@import "./assets/styles";

nav {  
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
