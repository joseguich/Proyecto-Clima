import { $spinner } from "../selector.js";
import { showAlert } from "./message-alert.js";
import { cleanPaginaWeb, showClima } from "./showClima.js";

export const consultarAPI = (city, country) => {

   //Obtener mi ID KEY
   const API_KEY = 'd59f108be8e92dd9c8cd7a00d4b9f47b';

   //Obeter url de la API.
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

   //Solicitar la informacion de la API.
   fetch(url)

      //Obtener la respuesta de la API
      .then(response => response.json())

      //Mostrar la informacion de la API.
      .then(data => {

         cleanPaginaWeb(); //Eliminar los elemento previo de la pagina web.

         //Mostrar alerta de error si no existe la ciudad.
         if (data.cod === '404') {
            showAlert('Ciudad no encontrada');
            return;
         }

         //Mostrar el spinner 
         $spinner.classList.remove('hidden')
         $spinner.classList.add('flex')

         setTimeout(() => {

            //Ocultar el spinner
            $spinner.classList.add('hidden')
            $spinner.classList.remove('flex')

            //Mostrar toda la imformacion de la API en la pagina Web
            showClima(data);

         }, 3000);

      });
}