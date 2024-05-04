import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('');

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    if (squaresCopy[i] || calculateWinner(squaresCopy)) return;
    squaresCopy[i] = xIsNext ? 'X' : 'O';

    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    if (!calculateWinner(squares) && squares.every((square) => square !== '')) {
      setStatus('Draw. Restart the game!');
    } else if (calculateWinner(squares)) {
      setStatus(`Winner: ${calculateWinner(squares)}`);
    } else {
      setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [squares, xIsNext]);

  return (
    <div className='container'>
      <h1 className='m-4 rounded-sm bg-emerald-700 p-2 text-center text-3xl uppercase'>
        Tic Tac Toe
      </h1>
      <div className='flex justify-evenly gap-8'>
        <div>
          <div className=''>
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className=''>
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className=''>
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
      <div className='mb-5 flex flex-col items-center'>
        {status && <h2 className='m-4 text-2xl font-semibold'>{status}</h2>}
        <Button onClick={() => setSquares(Array(9).fill(''))}>Restart Game</Button>
      </div>
    </div>
  );
};

export default TicTacToe;

const Square = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='float-left m-0 flex h-24 w-24 items-center justify-center border border-red-700 bg-slate-500 text-center hover:bg-slate-600'>
      <span className='text-2xl font-semibold '>{value}</span>
    </div>
  );
};
