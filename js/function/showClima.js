import { $createElement, $showResults } from "../selector.js";


export const showClima = (data) => {

   //Extraer la informacion de la API  la que vamos a utilizar 
   const { name, main: { temp, temp_max, temp_min } } = data;

   //Convertir la de kelvin a grado celsius.
   const gradoCelsius = KELVIN_A_CELSIUS(temp);
   const tempMaxima = KELVIN_A_CELSIUS(temp_max);
   const tempMinima = KELVIN_A_CELSIUS(temp_min);


   //Crear elemento de cada uno de los clima
   const tempearaturaCelsius = $createElement('p');
   const tempearaturaMaxima = $createElement('p');
   const temperaturaMinima = $createElement('p');

   //Todo el scriting 

   tempearaturaCelsius.innerHTML = `
   <h4 class ="font-mono text-2xl" > Clima en ${firstLetter(name)}</h4>
   ${gradoCelsius} <img src ="/img/celsius.png" class="inline w-16">`;
   //Clases
   tempearaturaCelsius.classList.add('font-bold', 'text-6xl');

   tempearaturaMaxima.innerHTML = `Max: ${tempMaxima} <img src ="/img/max.png" class="inline w-8">`;
   //Clases
   tempearaturaMaxima.classList.add('font-bold', 'text-2xl', 'font-mono');

   temperaturaMinima.innerHTML = `Min: ${tempMinima} <img src ="/img/baja-temperatura.png" class="inline w-8">`;
   //Clases
   temperaturaMinima.classList.add('font-bold', 'text-2xl', 'font-mono');

   // Crear al padre de todo los elemento creado
   const fatherClima = $createElement('div');
   fatherClima.classList.add('text-center', 'text-white');

   // Guardar los elemento en el padre 
   fatherClima.appendChild(tempearaturaCelsius);
   fatherClima.appendChild(tempearaturaMaxima);
   fatherClima.appendChild(temperaturaMinima);

   //Mostrar todo el contenido de los elemento creado para mostrar en la pagina web.
   $showResults.appendChild(fatherClima);

}

//Limpiar el HTML
export const cleanPaginaWeb = () => {
   while ($showResults.firstChild) {
      $showResults.removeChild($showResults.firstChild);
   }
}

//Convertir de kelvin a celsius
const KELVIN_A_CELSIUS = grado => {

   //Equivalente 1 grado celsius a kelvin 274.15
   const kelvin = 274.15;

   return parseInt(grado - kelvin);
}

//Colocal la primera letra masyuscila 
const firstLetter = city => city.charAt(0).toUpperCase() + city.slice(1);