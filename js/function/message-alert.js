import { $, $container, $createElement } from "../selector.js"

export const showAlert = (message) => {

   //Elimanar las alerta repetidas 
   const removeAlert = $(".remove-alert")

   //Si no hay ninguna alerta es decir, Si este selector me retorna vacio entonces podemos agregar una alerta
   //Pero si la siguiente vez hay una alerta ya no va agregar multiples alerta
   if (!removeAlert) {
      //Crear alerta de error 
      const messageAlert = $createElement("p");
      messageAlert.classList.add("remove-alert", "animate__animated", "animate__bounceIn", "bg-red-100", "text-red-700", "border-red-400", "mt-6", "py-3", "text-center", "max-w-md", "mx-auto", 'rounded-md');

      //Agregar la alerta el mensaje de error 
      messageAlert.innerHTML = `
      <p class = "font-bold">Error!</p>
      <p class = "block">${message}</p>
   `; //Scriting 

      //Mostrar el mensaje en la pagina web
      $container.appendChild(messageAlert);

      //Mostrar la alerta por 5s.
      setTimeout(() => {
         messageAlert.remove();
      }, 5000);
   }


}