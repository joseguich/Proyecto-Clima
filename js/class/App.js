import { $form } from "../selector.js";
import { validarCampus } from "../function/validation.js";

export default class App {
   constructor() {
      this.init();
   }

   init() {

      //Cargar todo los archivo ante de correr el prgogrma 
      window.addEventListener('load', () => {

         $form.addEventListener('submit', validarCampus);

      })
   }
}