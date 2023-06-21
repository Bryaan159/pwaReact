import { useState } from "react"

const TURN = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelect, updateBoard, index }) => {
  const className = `square ${isSelect ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};


function App() {
  //Se declara una constante ya que sera nuestro tablero para nuestro juego
  //Concepto de estado
  const [board, setBoard] = useState(
    Array(9).fill(null))

  const [turn, setTurn] = useState(TURN.X)

  //el estado de los combos que vamos a hacer
  const [winner, setWinner] = useState(null)

  //revisar y asegurar nuestro ganador
  const checkWinner = (boardCheck) =>{
    //revisamos las combinaciones posibles que tenemos
    for(const combo of winner_combos){
      const [a,b,c] = combo;
      if(boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      )
      return boardCheck[a];
    }
    //Significa que no tenemos aun ningun ganador
    return null;

  }

  
  const winner_combos = [
    //En este apartado van todas las combinaciones ganadoras que se puede tener
    [0,1,2], //horizontal
    [3,4,5], //horizontal
    [6,7,8], //horizontal

    [0,3,6], //vertical
    [1,4,7], //vertical
    [2,5,8], //vertical

    [0,4,8], //diagonal
    [2,4,6] //diagonal


  ]
  const updateBoard = (index) => {

    // Lo que hace esta linea de codigo es no permitir la actualizaciòn del estado porque encuentra un elemento dentro del componente
    /*board[index] verifica si la posición index en el tablero ya tiene un valor asignado. 
    Si board[index] ya contiene un valor (diferente de null), significa que esa posición
    del tablero ya está ocupada por un jugador, por lo que no se permite actualizar esa
    posición nuevamente. En ese caso, el código sale de la función updateBoard y no realiza ninguna acción adicional.
    winner verifica si ya hay un ganador en el juego. Si winner tiene un valor distinto de null, significa que ya se ha determinado un ganador previament*/

    if (board[index] || winner) return


    /*Se crea una variable newBoard que es una copia del tablero actual utilizando el operador de propagación
     ([...board]). Esto asegura que estamos trabajando con una copia del tablero y no modificando el estado
      original directamente.*/
    const newBoard = [...board]

    //Se va a actualizar directamente al index que se le ha proporcionado y el turno que tenga 
    newBoard[index] = turn 

    //Se actualiza la nueva copia del tablero
    setBoard(newBoard)

    //Condicional ternario es como si tengo un if y un else
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    //Como sabemos que el useState necesita de un estado actual y uno de actualizacion de estado
    setTurn(newTurn);

    //Revisar el ganador e informar quien gano la partida
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      setWinner(newWinner)
    }
  }


  return (
    <main className="board">
      <h1>Title</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                //Establece el valor del indice actual en el mapeo
                key={index}
                //Basicamente toma cada valor que se encuentra como una representación
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      {/*//Consiste en mostrar el turno del jugador que le toca
        //La funciòn isSelect lo que hace es evaluar el turno en el caso que sea x
        //Mostrara marcado el turno X en la view     */}

      <section className="turn">
        <Square isSelect={turn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelect={turn === TURN.O} >
          {TURN.O}
        </Square>
      </section>
    </main>

  )
}

export default App
