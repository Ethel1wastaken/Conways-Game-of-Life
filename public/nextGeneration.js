
export function nextGeneration(state) {
    const nextGeneration = [];

    const rows = state.length;
    const cols = state[0].length;

    for (let r = 0; r < rows; r++) {
        const newRow = [];
        for (let c = 0; c < cols; c++) {
            newRow.push(checkCell(state, r, c));
        }

        nextGeneration.push(newRow);
    }

    return nextGeneration;
}export function checkCell(state, row, col) {

    const rows = state.length;
    const cols = state[0].length;

    let aliveNeighbors = 0;

    for (let r = row - 1; r <= row + 1; r++) {
        if (r < 0 || r >= rows) continue;

        for (let c = col - 1; c <= col + 1; c++) {
            if (c < 0 || c >= cols) continue;
            if (r === row && c === col) continue;

            if (state[r][c] === 1) aliveNeighbors++;
        }
    }

    if (state[row][col] === 1) {
        if (aliveNeighbors < 2) return 0;
        if (aliveNeighbors > 3) return 0;
        else return 1;
    }
    else {
        if (aliveNeighbors === 3) return 1;
        else return 0;
    }
}

