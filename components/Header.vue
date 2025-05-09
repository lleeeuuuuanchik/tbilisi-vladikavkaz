<template>
    <header class="header">
      <img src="/assets/imgs/logo.svg" alt="logo">
      <nav class="header__nav">
        <a href="#about" class="header__nav-link">О нас</a>
        <a href="#facts" class="header__nav-link">Ключевые факты</a>
        <a href="#tarifs" class="header__nav-link">Тарифы</a>
        <img
          src="/assets/imgs/burger.svg"
          alt="burger"
          class="header__nav-link--burger open"
          :class="{ hide: isBurgerOpen }"
          @click="toggleBurger"
        >
        <img
          src="/assets/imgs/close-burger.svg"
          alt="burger"
          class="header__nav-link--burger close"
          :class="{ hide: !isBurgerOpen }"
          @click="toggleBurger"
        >
      </nav>
    </header>
  </template>
  
<script setup>
  const { isBurgerOpen, toggleBurger } = useHeader()
</script>