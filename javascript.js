const tableBody = document.querySelector("tbody");

for (let rowNum = 1; rowNum <= 31; rowNum++) {
    const tableRow = document.createElement("tr");
    tableRow.textContent = rowNum;
    tableRow.setAttribute("id", rowNum)
    
    for (let colNum = 1; colNum < 7; colNum++) {
        const tableData = document.createElement("td");
        tableData.setAttribute("id", `${rowNum}${colNum}`);
        tableRow.appendChild(tableData);
    }



    tableBody.appendChild(tableRow);

    
}