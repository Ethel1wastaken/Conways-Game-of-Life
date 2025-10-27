import { glider } from "./patterns/glider.js";
import { pulsar } from "./patterns/pulsar.js";
import { pentomino } from "./patterns/pentomino.js";
import { gosper } from "./patterns/gosper.js";

function mainLoop() {
    renderGrid(state);
    state = nextGeneration(state);
}



function renderGrid(state) {
    const mainEl = document.querySelector("main");
    const existing = document.getElementById("grid");
    if (existing) existing.remove();

    const gridEl = document.createElement("section");
    gridEl.id = "grid";
    mainEl.appendChild(gridEl);

    const rows = state.length;
    const cols = state[0].length;

    for(let r=0; r<rows; r++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridEl.appendChild(row);

        for(let c=0; c<cols; c++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);

            if (state[r][c] === 1) {
                cell.classList.add("alive");
            }
        }
    }
}

function nextGeneration(state) {
    const nextGeneration = [];

    const rows = state.length;
    const cols = state[0].length;

    for(let r=0; r<rows; r++) {
        const newRow = [];
        for(let c=0; c<cols; c++) {
            newRow.push(checkCell(state, r, c))
        }

        nextGeneration.push(newRow);
    }

    return nextGeneration;
}

function checkCell(state, row, col) {

    const rows = state.length;
    const cols = state[0].length;

    let aliveNeighbors = 0;

    for (let r=row-1; r<=row+1; r++) {
        if (r < 0 || r >= rows) continue;

        for (let c=col-1; c<=col+1; c++) {
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
    else{
        if (aliveNeighbors === 3) return 1;
        else return 0;
    }
}

function resetState() {
    let newState = gosper;
    return newState;
}

function clearState(state) {
    const rows = state.length;
    const cols = state[0].length;

    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            state[r][c] = 0;
        }
    }
    return state;
}

let state = resetState();
renderGrid(state);

let intervalId = null;
document.getElementById("start").onclick = function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById("start").innerText = "▶";
    }
    else {
        mainLoop();
        intervalId = setInterval(mainLoop, 200);
        document.getElementById("start").innerText = "⏸";
    }
}

document.getElementById("reset").onclick = function() {
    state = resetState();
    renderGrid(state);
}

document.getElementById("clear").onclick = function() {
    state = clearState(state);
    renderGrid(state);
}
