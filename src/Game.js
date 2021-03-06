import { Game } from 'boardgame.io/core';

function isVictory(cells) {
    const positions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let pos of positions) {
        const symbol = cells[pos[0]];
        let winner = symbol;
        for (let i of pos) {
            if (cells[i] !== symbol) {
                winner = null;
                break;
            }
        }
        if (winner != null) return true;
    }

    return false;
}

export const TicTacToeGame = Game({
    setup: () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell(G, ctx, id) {
            let cells = [...G.cells];
            // Ensure cells are not overwriten
            if (cells[id] === null) {
                cells[id] = ctx.currentPlayer;
            }
            return { ...G, cells };
        },
    },

    flow: {
        endGameIf: (G, ctx) => {
            if (isVictory(G.cells)) {
                return ctx.currentPlayer;
            }
        },
    },
});