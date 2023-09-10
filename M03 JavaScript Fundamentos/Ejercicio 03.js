/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      console.log('son iguales');
      return true;
   } else {
      console.log ('no son iguales');
      return false; 
   }
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) {
      console.log('tienen la misma longitud');
      return true; 
   } else {
      console.log('no tienen la misma longitud');
      return false;
   }
   
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      console.log('es menos Que Noventa');
      return true;
   } else {
      console.log('es mas que noventa');
      return false;
   }
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      console.log('es menos Que cincuenta');
      return true;
   } else {
      console.log('es mas que cincuenta');
      return false;
   }

}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0 ) {
      console.log('es par');
      return true;
   } else {
      console.log('no es par');
      return false; 
   }
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 ! ]== 0 ) {
      console.log('no es par');
      return true;
   } else {
      console.log('es par');
      return false;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

