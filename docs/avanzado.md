# Nivel avanzado

---

## 7. Funciones

Una funcion es un pedazo de codigo que le pones un nombre y lo puedes usar las veces que quieras. Puede recibir datos y devolver un resultado con `return`. Si no devuelve nada, se pone `void`.

```cpp
#include <iostream>
#include <string>
using namespace std;

int doble(int n) {
    return n * 2;
}

void saludar(string nombre) {
    cout << "Hola " << nombre << ", bienvenido!" << "\n";
}

int main() {
    cout << "El doble de 7 es " << doble(7) << "\n";
    saludar("Carlos");
    return 0;
}
```

---

## 8. Structs

Un struct es como inventar tu propio tipo de variable que tiene varios datos adentro. Por ejemplo, un alumno tiene nombre, edad y promedio.

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Alumno {
    string nombre;
    int edad;
    double promedio;
};

int main() {
    Alumno a;
    a.nombre = "Sofia";
    a.edad = 14;
    a.promedio = 6.2;

    cout << a.nombre << " tiene " << a.edad << " anos" << "\n";
    cout << "Promedio: " << a.promedio << "\n";
    return 0;
}
```
