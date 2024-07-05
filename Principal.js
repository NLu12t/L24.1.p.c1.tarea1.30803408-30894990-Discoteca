/** 
  * DISCOTECA
  * Una discoteca desea llevar el control de sus ganancias. Para esto conoce de cada rumbero: su
  * cédula, nombre, edad y sexo. Cada entrada tiene un costo dependiendo del sexo, si es chico
  * vale 25$ y si es chica cuesta en 25% del valor del chico. Por Noche, la discoteca desea saber:
  * a) Pago que realiza cada rumbero 
  * b) Total Ganado, 
  * c) Porcentaje de rumberas mayores a 21 años, 
  * d) Cual sexo asistió más a la discoteca.
  * La discoteca suministra la siguiente información demostrativa, para 4 rumberos: 
  * (cedula, nombre, edad, sexo) (134, Luis, 23, M) (154, Ana, 22, F) (324, José, 18, M)
  * (286, Carmen, 19, F) según lo cual la salida requerida presenta el siguiente formato:
  * Pago que realiza Luis 25$
  * Pago que realiza Ana 6.25$
  * Pago que realiza José 25$
  * Pago que realiza Carmen 6.25$
  *Total Ganado 62.50$
  * Porcentaje de rumberas mayores a 21 años: 50 %
  * El sexo que más asistió a la discoteca es: AMBOS POR IGUAL   */

  import Cl_Rumbero from "./Cl_Rumbero.js";
  import Cl_Discoteca from "./Cl_Discoteca.js";

  //instanciamos al objeto rumbero
  let rumbero1 = new Cl_Rumbero(134, "Luis", 23, "M");
  let rumbero2 = new Cl_Rumbero(154, "Ana", 22, "F");
  let rumbero3 = new Cl_Rumbero(324, "Jose", 18, "M");
  let rumbero4 = new Cl_Rumbero(286, "Carmen", 19, "F");
  let discoteca = new Cl_Discoteca();
  discoteca.procesarRumbero(rumbero1);
  discoteca.procesarRumbero(rumbero2); 
  discoteca.procesarRumbero(rumbero3);
  discoteca.procesarRumbero(rumbero4);

 //mostramos el resultado
 let salida = document.getElementById('salida')
 salida.innerHTML = 'Resultados: '
 salida.innerHTML +=
   '<br> Pago que realiza Luis: ' + rumbero1.calcPagoCadUno(rumbero1) + ' $'
 salida.innerHTML +=
   '<br> Pago que realiza Ana: ' + rumbero2.calcPagoCadUno(rumbero2) + ' $'
 salida.innerHTML +=
   '<br> Pago que realiza Jose: ' + rumbero3.calcPagoCadUno(rumbero3) + ' $'
 salida.innerHTML +=
   '<br> Pago que realiza Carmen: ' + rumbero4.calcPagoCadUno(rumbero4) + ' $'
 salida.innerHTML += '<br> <br>'
 salida.innerHTML +=
   '<br> Total Ganancia: ' + discoteca.devolveracumGanancia() + ' $'
 salida.innerHTML +=
   '<br> Porcentaje de rumberas mayores a 21 años: ' +
   discoteca.porcRumbMay21().toFixed(2) +
   ' %'
 salida.innerHTML +=
   '<br> El sexo que mas asistio a la discoteca es: ' +
   discoteca.sexoMasAsistio()
 