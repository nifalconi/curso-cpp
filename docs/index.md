
# 🌟 Resumen exprés de C++ — versión mejorada + truquitos 🌟  

*(Pensado para estudiantes que recién empiezan)*  

---

## 0. Tu primer programa

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "¡Hola mundo!\n";
    return 0;
}
```

---

## 1. Variables 🧰  

| Tipo | Guarda… | Ejemplo |
|------|---------|---------|
| `int` | Enteros | `int edad = 14;` |
| `float` / `double` | Decimales | `float nota = 6.5f;` |
| `char` | Una letra | `char inicial = 'A';` |
| `bool` | Verdadero/Falso | `bool feliz = true;` |
| `string`* | Texto | `string nombre = "Ana";` |

> \*Recuerda incluir `#include <string>` para usar `string`.

---

## 2. Entrada / Salida 💬

```cpp
int edad;
cout << "¿Edad? ";
cin  >> edad;

// concatenar
cout << arreglo[i] << " " << "hola";

string nombre;
cin.ignore();          // ← truco: limpia el salto pendiente
getline(cin, nombre);  // Lee texto con espacios
```

---

## 3. Condicionales 🔀

```cpp
if (edad >= 18) {
    cout << "Mayor de edad\n";
} else if (edad >= 13) {
    cout << "Adolescente\n";
} else {
    cout << "Niña/o\n";
}
```

---

## 4. Bucles 🔁  

### `for` – veces conocidas

```cpp
for (int i = 0; i < 5; ++i) {
    cout << i << " ";      // 0 1 2 3 4 
}
cout << "\n";
```

### `while` – mientras se cumpla algo

```cpp
int i = 0;
while (i < 3) {
    cout << i << " ";      // 0 1 2 
    ++i;
}
cout << "\n";
```

---

## 5. Arreglos (arrays) 📦

```cpp
int notas[3] = {7, 6, 5};

int tam = sizeof(notas) / sizeof(notas[0]);   // tamaño

for (int i = 0; i < tam; ++i) {
    cout << notas[i] << " ";                  // 7 6 5 
}
cout << "\n";
```

> 🔒 El tamaño es fijo; no puede crecer.

---

## 6. Vectores (`std::vector`) 🪄

```cpp
#include <vector>
using namespace std;

vector<int> edades = {10, 12};
edades.push_back(14);

for (size_t i = 0; i < edades.size(); ++i) {
    cout << edades[i] << " ";                 // 10 12 14 
}
cout << "\n";
```

Funciones útiles:

```cpp
edades.back();    // Último elemento
edades.size();    // Cantidad total
edades.clear();   // Vaciar el vector
```

---

## 7. Funciones ⚙️

```cpp
int suma(int a, int b) {
    return a + b;
}

void saludar(const string& n) {
    cout << "Hola " << n << "!\n";
}

// Uso
cout << suma(3, 4) << "\n";   // 7
saludar("Sofía");
```

---

## 8. Structs 👩‍👧‍👧

```cpp
struct Persona {
    string nombre;
    int    edad;
};

Persona p{"Camila", 15};
cout << p.nombre << " tiene " << p.edad << " años\n";
```

---

## 9. Consejos finales 💡  

- **Comentarios**: `// esto se ignora`.  
- Marca valores inmutables con **`const`**: `const float PI = 3.14159f;`.  
- Practica con mini-proyectos: calculadora, “adivina el número”, lista de compras.  

---

## 10. Truquitos rápidos 🪄✨  

| Truco | Código / Uso | ¿Para qué sirve? |
|-------|--------------|------------------|
| **Bucle for-rango** | `for (int x : notas) cout << x << " ";` | Recorre arrays/vectores de forma más limpia. |
| **`\n` vs `endl`** | `cout << "Hola\n";` | `\n` es más rápido (no vacía el buffer como `endl`). |
| **`cin.ignore()`** | Después de `cin >>` y antes de `getline` | Evita que un salto de línea pendiente “robe” la entrada. |
| **Inicialización con llaves** | `int x{0};` | Evita conversiones indeseadas. |
| **`std::array`** | `#include <array>` → `array<int,3> a{1,2,3};` | Arreglo fijo “moderno” con `.size()`. |
| **Algoritmos STL** | `sort(v.begin(), v.end());` | Ordenar, buscar, contar sin escribir todo el código. |
| **Compilar con advertencias** | `g++ -std=c++17 -Wall -Wextra archivo.cpp` | Encuentra errores antes de ejecutar. |
| **`swap` rápido** | `swap(a, b);` | Intercambia valores sin variable temporal. |
| **Operador ternario** | `string r = (nota >= 4) ? "OK" : "Reprueba";` | Condición en una línea. |
| **Debug rápido** | `cerr << "x=" << x << '\n';` | Mensajes de depuración en la consola de errores. |

---

¡Listo! Con estos conceptos y trucos ya tienes todo para empezar a programar en C++ de forma divertida y eficiente. 🚀
