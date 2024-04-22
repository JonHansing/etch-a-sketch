const container = document.querySelector(".container");
container.setAttribute("style", "display: flex, flex-direction: column");

const resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
resetButton.addEventListener("click", () => {
    const element = document.querySelector(".grid");
    element.remove();
    let size = prompt("How large should the new grid be? Number must be less than 100.", "64");
    if (size > 100) {
        size = 100;
    } else {
        size = Number(size);
    };
    drawGrid(size);
});
container.appendChild(resetButton);

function drawGrid(numSquares) {
    const squareHeight = 960/numSquares + "px";
    const squareWidth = 960/numSquares + "px";
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.outline = "solid";

    for (let i = 0; i < numSquares; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.style.display = "flex";

        for (let j = 0; j < numSquares; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.style.width = squareWidth;
            gridSquare.style.height = squareHeight;
            gridSquare.classList.add("square");
            gridSquare.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black"; // Only change the background color
            });
            gridColumn.appendChild(gridSquare);
        };

        grid.appendChild(gridColumn);
    };
    container.appendChild(grid);
};

drawGrid(64);