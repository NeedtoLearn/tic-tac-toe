import { Client } from 'boardgame.io/react';
import { TicTacToeGame } from './Game';
import { TicTacToeBoard } from './Board';

const App = Client({
    game: TicTacToeGame,
    board: TicTacToeBoard,
});

export default App;
