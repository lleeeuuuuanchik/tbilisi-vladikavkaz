<template>
    <div class="container">
      <Header />
      <div class="header__burger" :class="{ show: isBurgerOpen }">
        <nav class="header__burger-nav">
          <a href="#about" class="header__nav-link" @click="toggleBurger">О нас</a>
          <a href="#facts" class="header__nav-link" @click="toggleBurger">Ключевые факты</a>
          <a href="#tarifs" class="header__nav-link" @click="toggleBurger">Тарифы</a>
        </nav>
      </div>
    </div>
    
    <main class="content">
      <MainSection />
      <AboutSection id="about" />
      <FactsSection id="facts" />
      <TarifsSection id="tarifs" />
      <GeorgiaSection />
      <Footer />
    </main>
</template>
  
<script setup>
    const { isBurgerOpen, toggleBurger } = useHeader()
</script>