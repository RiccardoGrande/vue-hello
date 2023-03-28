//Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const { createApp } = Vue



 
createApp({
    /* option object */
    import image from "./assets/img/HD-wallpaper-landscape-red-dead-redemption-2.jpg"

    export default {
      data: function () {
        return {
          image: image
        }
      }
    },
      
      
      data() {
        return {
          message: 'Hello Vue!',
         

        }
      }
}).mount('#app')

