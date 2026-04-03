# Nivel medio

---

## 5. Arreglos (arrays)

Un arreglo es una lista de valores del mismo tipo. Le dices el tamanio cuando lo creas y despues no puede cambiar.

```cpp
#include <iostream>
using namespace std;

int main() {
    int notas[] = {90, 75, 88, 62, 95};

    int suma = 0;
    for (int i = 0; i < 5; ++i) {
        suma = suma + notas[i];
    }

    cout << "Promedio: " << suma / 5 << "\n";
    return 0;
}
```

Los indices empiezan en `0`. Si el arreglo tiene 5 elementos, el ultimo esta en la posicion `4`.

---

## 6. Vectores

Un vector es como un arreglo pero puede crecer o hacerse mas chico. Necesitas `#include <vector>`.

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30};
    numeros.push_back(40);
    numeros.push_back(50);

    for (int i = 0; i < 5; ++i) {
        cout << numeros[i] << " ";
    }
    cout << "\n";
    return 0;
}
```

Funciones utiles de vectores:

| Funcion | Que hace |
| --- | --- |
| `v.push_back(x)` | Agrega `x` al final |
| `v.pop_back()` | Elimina el ultimo |
| `v.empty()` | `true` si esta vacio |
| `v.front()` | Primer elemento |
| `v.back()` | Ultimo elemento |
| `v.clear()` | Borra todo |

---

## Tips utiles

| Tip | Ejemplo | Para que sirve |
| --- | --- | --- |
| Comentarios | `// esto se ignora` | Explicar tu codigo |
| Constantes | `const double PI = 3.14159;` | Valores que no cambian |
| `\n` vs `endl` | `cout << "Hola\n";` | `\n` es mas rapido que `endl` |
| `swap(a, b)` | `swap(x, y);` | Intercambia dos valores |
| Compilar bien | `g++ -std=c++17 -Wall programa.cpp` | Muestra advertencias utiles |
