function generateGrid(rows, cols) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    for(let r=0; r<rows; r++) {
        const row = document.createElement("tr");
        grid.appendChild(row);
        for(let c=0; c<cols; c++) {
            const cell = document.createElement("td");
            cell.classList.add("cell");
            row.appendChild(cell);  
        }
    }
}

generateGrid(10, 10);