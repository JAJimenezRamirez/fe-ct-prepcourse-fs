/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   function deObjetoAarray(objeto) {
   var resultado = [];
   for (var clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
         resultado.push([clave, objeto[clave]]);
      }
   }
   return resultado;
}

describe('EJERCICIOS EXTRA', function () {
   describe('deObjetoAarray(objeto)', function () {
      it('Debe retornar un arreglo donde cada sub-arreglo contiene el par clave:valor del objeto', function () {
         expect(deObjetoAarray({ x: 1, y: 2 })).toEqual([
            ['x', 1],
            ['y', 2],
         ]);
         expect(deObjetoAarray({ x: 10, y: 25 })).toEqual([
            ['x', 10],
            ['y', 25],
         ]);
      });
   });



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   describe('capToFront(string)', function () {
      it('Debe enviar todas las letras en mayúsculas al comienzo del string', function () {
         expect(capToFront('soyHENRY')).toEqual('HENRYsoy');
         expect(capToFront('DESArrollaDOR')).toEqual('DESADORrrolla');
      });
   });
   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      // Separar el string en letras mayúsculas y minúsculas
      let mayusculas = '';
      let minusculas = '';
      
      for (let i = 0; i < string.length; i++) {
          if (string[i] === string[i].toUpperCase()) {
              mayusculas += string[i];
          } else {
              minusculas += string[i];
          }
      }
      
      // Unir las letras mayúsculas y minúsculas
      let resultado = mayusculas + minusculas;
      
      return resultado;
  }
   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   return frase.split(' ').map(palabra => palabra.split('').reverse().join('')).join(' ');
} 
  
  describe('asAmirror(frase)', function () {
      it('Debe transformar la frase en una frase espejo.', function () {
         expect(asAmirror('I love you so much!')).toBe('I evol uoy os !hcum');
         expect(asAmirror('The Henry Challenge is close!')).toBe(
            'ehT yrneH egnellahC si !esolc'
         );
      });
   });
  
}

   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
 function capicua(numero) {
      // Convertir el número a string
      let numeroString = numero.toString();
      
      // Revertir el string
      let numeroRevertido = numeroString.split('').reverse().join('');
      
      // Comparar el número original y el revertido
      if (numeroString === numeroRevertido) {
          return 'Es capicua';
      } else {
          return 'No es capicua';
      }
  }

  describe('capicua(numero)', function () {
   it('Debe retornar el string esperado dependiendo si el número es o no capicúa.', function () {
      expect(capicua(12321)).toEqual('Es capicua');
      expect(capicua(1111)).toEqual('Es capicua');
      expect(capicua(105217)).toEqual('No es capicua');
      expect(capicua(7878700)).toEqual('No es capicua');
   });
});

   
}

   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código: 
    function deleteAbc(string) {
      return string.replace(/[abc]/g,'');
   }

   describe('deleteAbc(string)', function () {
      it('Debe retornar el mismo string, pero eliminando las letras "a", "b" y "c"', function () {
         expect(deleteAbc('abcefgh')).toEqual('efgh');
         expect(deleteAbc('abc')).toEqual('');
         expect(deleteAbc('plural')).toEqual('plurl');
         expect(deleteAbc('limon')).toEqual('limon');
      });
   });
   
}
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
      function sortArray(arrayOfStrings) {
      return arrayOfStrings.sort((a, b) => a.length - b.length);
   }

   describe('sortArray(arrayOfStrings)', function () {
      it('Debe retornar un nuevo arreglo con los elementos en orden de crecimiento a partir de sus longitudes', function () {
         expect(sortArray(['You', 'are', 'beautiful', 'looking'])).toEqual([
            'You',
            'are',
            'looking',
            'beautiful',
         ]);
         expect(sortArray(['pera', 'manzana', 'alcaucil', 'papa'])).toEqual([
            'pera',
            'papa',
            'manzana',
            'alcaucil',
         ]);
      });
   });
   

   
}

   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código: 
   function buscoInterseccion(array1, array2) {
      return array1.filter(value => array2.includes(value));
   }

  
   
   describe('buscoInterseccion(array1, array2)', function () {
      it('Debe retornar un arreglo con los elementos en común de cada arreglo. Si no hay elementos en común, retornar un arreglo vacío', function () {
         expect(buscoInterseccion([1, 2, 3], [1, 5, 8, 3])).toEqual([1, 3]);
         expect(buscoInterseccion([7, 23, 4], [23, 70])).toEqual([23]);
         expect(buscoInterseccion([1, 20, 3], [22, 5, 7])).toEqual([]);
      });
   });
});

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
