# Glosario

Todas las palabras raras que vas a ver en C++, explicadas facil.

---

## `#include`

Le dice al programa que necesita usar algo extra. Por ejemplo `#include <iostream>` te deja usar `cout` y `cin`.

## `using namespace std;`

Para no tener que escribir `std::` antes de todo. Sin esto tendrias que poner `std::cout` en vez de solo `cout`.

## `int main()`

Donde empieza tu programa. Todo lo que pongas adentro de las llaves `{}` se ejecuta.

## `cout`

Muestra texto en la pantalla. Las flechitas `<<` apuntan hacia afuera.

```cpp
cout << "Hola" << "\n"; // muestra "Hola" y baja un renglon
```

## `cin`

Lee lo que el usuario escribe. Las flechitas `>>` apuntan hacia la variable.

```cpp
int x;
cin >> x; // guarda lo que escriba el usuario en x
```

## `\n` y `endl`

Los dos bajan un renglon. `"\n"` es mas rapido pero hacen lo mismo.

## Variable

Un nombre que le pones a un dato para usarlo despues.

```cpp
int edad = 14;       // numero entero
double nota = 6.5;   // numero con decimales
char letra = 'A';    // un solo caracter
bool ok = true;      // verdadero o falso
string nombre = "Ana"; // texto (necesita #include <string>)
```

## `if` / `else if` / `else`

El programa decide que hacer segun una condicion.

```cpp
if (nota >= 90) {
    // se cumple esto
} else if (nota >= 70) {
    // se cumple esto otro
} else {
    // si nada se cumplio
}
```

## Operadores de comparacion

```cpp
x == 5   // es igual a
x != 0   // es distinto de
x < 10   // menor que
x > 3    // mayor que
x <= 100 // menor o igual
x >= 18  // mayor o igual
```

## `&&` y `||`

Combinan condiciones. `&&` es "y", `||` es "o".

```cpp
if (edad >= 13 && tienePermiso) {
    // las dos cosas se tienen que cumplir
}
```

## `for`

Repite algo una cantidad de veces que tu decides.

```cpp
for (int i = 0; i < 5; ++i) {
    // esto se repite 5 veces
    // i va: 0, 1, 2, 3, 4
}
```

## `while`

Repite algo mientras una condicion se cumpla.

```cpp
while (numero <= 100) {
    // esto se repite hasta que numero sea mayor a 100
}
```

## Arreglo (array)

Una lista de valores del mismo tipo. El tamanio no puede cambiar.

```cpp
int notas[] = {90, 75, 88}; // 3 elementos
notas[0]; // el primero: 90
notas[2]; // el ultimo: 88
// ojo: siempre empieza en 0
```

## Vector

Como un arreglo pero puede crecer. Necesita `#include <vector>`.

```cpp
vector<int> nums = {10, 20};
nums.push_back(30); // ahora tiene 10, 20, 30
```

## Funcion

Un pedazo de codigo con nombre que puedes usar varias veces.

```cpp
int doble(int n) {   // recibe un numero
    return n * 2;    // devuelve el doble
}

void saludar() {     // void = no devuelve nada
    cout << "Hola" << "\n";
}
```

## `return`

Devuelve un resultado desde una funcion. En `main`, `return 0;` significa que el programa termino bien.

## Comentarios

Texto que el programa ignora. Sirve para explicar tu codigo.

```cpp
// esto es un comentario de una linea

/* esto es un comentario
   de varias lineas */
```
