//Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.


//creiamo una variabile che identifica l'oggetto VUE
const { createApp } = Vue



 //funzione degli oggetti da implementare
createApp({
    /* option object */
      
      
      data() {
        return {
          message: 'Hello Vue!',
          image: "./assets/img/HD-wallpaper-landscape-red-dead-redemption-2.jpg"

        }
      }
}).mount('#app')

