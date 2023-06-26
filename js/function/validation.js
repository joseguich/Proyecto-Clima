import { $city, $country } from "../selector.js";
import { showAlert } from "./message-alert.js";
import { consultarAPI } from "./consultarAPI.js";


export const validarCampus = (e) => {
   e.preventDefault();

   //Obtener valores
   const city = $city.value;
   const country = $country.value;

   //Validar campos
   if (city === "" || country === "") {
      showAlert('Los campos son obligatorio');
      return;
   }

   //Consultar la API
   consultarAPI(city, country)

}