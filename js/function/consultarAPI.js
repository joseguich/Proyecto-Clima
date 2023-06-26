import { showAlert } from "./message-alert.js";

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
         console.log(data);
         if (data.cod === '404') {
            showAlert('Ciudad no encontrada');
            return;
         }
      });
}