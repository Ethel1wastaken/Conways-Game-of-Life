function renderGrid(state) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    const rows = state.length;
    const cols = state[0].length;

    for(let r=0; r<rows; r++) {
        const row = document.createElement("tr");
        grid.appendChild(row);

        for(let c=0; c<cols; c++) {
            const cell = document.createElement("td");
            cell.classList.add("cell");
            row.appendChild(cell);

            if (state[r][c] === 1) {
                cell.classList.add("alive");
            }
        }
    }
}

let state = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

renderGrid(state);