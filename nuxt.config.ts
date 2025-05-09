// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/base.css',
    '@/assets/styles/header.css',
    '@/assets/styles/main-section.css',
    '@/assets/styles/about-section.css',
    '@/assets/styles/facts-section.css',
    '@/assets/styles/tarifs-section.css',
    '@/assets/styles/georgia-section.css',
    '@/assets/styles/footer.css'
  ],
  app: {
    head: {
      title: 'Тбилиси - Владикавказ. Поездки в грузию!',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { 
          name: 'description', 
          content: 'Откройте для себя чарующую красоту Грузии с нашими увлекательными путешествиями. Изумительные горные пейзажи, древние культурные достопримечательности и гостеприимство местных жителей ждут вас.'
        },
        { 
          name: 'keywords', 
          content: 'Грузия, путешествия, горные пейзажи, культурные достопримечательности, история Грузии, грузинская кухня, туризм'
        }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
      script: [
        {
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(95645672, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
          `,
          type: 'text/javascript'
        }
      ],
      noscript: [
        { innerHTML: '<div><img src="https://mc.yandex.ru/watch/95645672" style="position:absolute; left:-9999px;" alt="" /></div>' }
      ]
    }
  }
})