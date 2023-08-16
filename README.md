## Creación de una PWA con un juego
[] Spread Operator
[] Rest Operator
[] Others

### Estados en React
Tenemos una caja vacia en la cual esa caja representa un **estado** en React. El estado es como una memoria especial que puede almacenar información importante para tu aplicación.
```javascript
const [board, setBoard] = useState(Array(9).fill(null))
  
const [turn, setTurn] = useState(TURN.O) 
```
En el código que muestras, tienes dos estados. El primer estado se llama board y representa el tablero de un juego. Inicialmente, se establece como un arreglo de 9 elementos, todos con el valor null. Cada elemento del arreglo representa una casilla del tablero.

El segundo estado se llama turn y representa el turno actual del juego. Inicialmente, se establece como TURN.X, que representa al jugador X.

Cuando usas useState, React crea dos cosas para ti: una variable que almacena el estado actual y una función para actualizar ese estado.