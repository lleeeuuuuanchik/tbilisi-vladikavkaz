export const useHeader = () => {
    const isBurgerOpen = ref(false)
  
    const toggleBurger = () => {
      isBurgerOpen.value = !isBurgerOpen.value
    }
  
    return {
      isBurgerOpen,
      toggleBurger
    }
}