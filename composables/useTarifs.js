export const useTarifs = () => {
    const tarifs = ref([
      {
        title: 'Одно место в авто',
        advantages: [
          '1 пассажир',
          'Кондиционер',
          'Объемный багажник',
          'Приятная музыка',
          'скидка 10% с промокодом: TATO'
        ],
        price: '3000',
        link: 'https://wa.me/79627485550'
      },
      {
        title: 'Отдельная машина',
        advantages: [
          '3-4 пассажира',
          'Кондиционер',
          'Объемный багажник',
          'Приятная музыка',
          'скидка 10% с промокодом: TATO'
        ],
        price: '10000',
        link: 'https://wa.me/79627485550'
      },
      {
        title: 'Аренда минивэна',
        advantages: [
          '7 пассажиров',
          'Кондиционер',
          'Объемный багажник',
          'Приятная музыка',
          'скидка 10% с промокодом: TATO'
        ],
        price: '15000',
        link: 'https://wa.me/79627485550'
      }
    ])
  
    const activeTarif = ref(null)
  
    const toggleTarif = (index) => {
      activeTarif.value = activeTarif.value === index ? null : index
    }
  
    return {
      tarifs,
      activeTarif,
      toggleTarif
    }
  }