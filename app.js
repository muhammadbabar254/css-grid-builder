const cols = document.getElementById("cols");
const rows = document.getElementById("rows");

const grid = document.getElementById("grid");
const output = document.getElementById("output");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function generateGrid() {

    let c = cols.value;
    let r = rows.value;

    grid.innerHTML = "";

    grid.style.gridTemplateColumns = `repeat(${c}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;

    let total = c * r;

    for (let i = 0; i < total; i++) {
        let box = document.createElement("div");
        grid.appendChild(box);
    }

    let css = `
display: grid;
grid-template-columns: repeat(${c}, 1fr);
grid-template-rows: repeat(${r}, 1fr);
gap: 10px;
`;

    output.value = css;
}

generateBtn.addEventListener("click", generateGrid);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
    copyBtn.innerText = "Copied ✔";

    setTimeout(() => {
        copyBtn.innerText = "Copy CSS";
    }, 1200);
});