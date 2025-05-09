<template>
    <section class="tarifs container">
      <h2 class="g-subtitle">Что мы предлагаем?</h2>
      <div class="tarifs-wr">
        <img src="/assets/imgs/tarifs-img.png" alt="tarif-img" class="tarifs-img">
        <div class="tarifs__content">
          <div 
            v-for="(tarif, index) in tarifs" 
            :key="index" 
            class="tarifs__content-item"
          >
            <div class="tarifs__content-item-title-wr" @click="toggleTarif(index)">
              <h3 class="tarifs__content-item-title">
                {{ tarif.title }}
              </h3>
              <img 
                src="/assets/imgs/+.svg" 
                class="tarifs__content-item-title-img" 
                alt="plus"
                :class="{ hide: activeTarif === index }"
              >
              <img 
                src="/assets/imgs/-.svg" 
                class="tarifs__content-item-title-img" 
                alt="minus"
                :class="{ hide: activeTarif !== index }"
              >
            </div>
            <div class="tarifs__content-item-info-wr" :class="{ active: activeTarif === index }">
              <div class="tarifs__content-item-info-advantages-wr">
                <p 
                  v-for="(advantage, i) in tarif.advantages" 
                  :key="i" 
                  class="tarifs__content-item-info-advantage"
                >
                  {{ advantage }}
                </p>
              </div>
              <div class="tarifs__content-item-info-cost-wr">
                <p class="tarifs__content-item-info-cost-title">Стоимость</p>
                <p class="tarifs__content-item-info-cost-price">{{ tarif.price }} ₽</p>
              </div>
              <a :href="tarif.link" target="_blank">
                <button class="button">Заказать такси</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
  const { tarifs, activeTarif, toggleTarif } = useTarifs()
</script>