console.log("Basic Grid");

/*
    tagName, cssName, content
*/

function createElement(tagName, cssName, content){
    const element = document.createElement(tagName);
    //element.classList.add(cssName); 
    //element.setAttribute("class", cssName);
    element.className = cssName;

    if (content){
        const text = document.createTextNode(content);
        element.appendChild(text);
    }

    return element;
}

/*
    a createElement segitsegevel hozzunk letre egy div taget, melynek 
    a csss osztalya legyen a basic-grid, es a tartalma egy tetszoleges szoveg
    vegul az igy letrehozott elemet tegyuk bele a grid-container elembe
*/

/*
const firstElement = createElement("div", "basic-grid", "Elso szoveg");
document.getElementById("grid-container").appendChild(firstElement);

const secElement = createElement("div", "basic-grid", "Masodik szoveg");
document.getElementById("grid-container").appendChild(secElement);

const thirdElement = createElement("div", "basic-grid", "Harmadik szoveg");
document.getElementById("grid-container").appendChild(thirdElement);
*/

function renderGrid(data, headers, renderTo, titleText){
    const grid = createElement("div", "basic-grid");
    let row, cell;

    if (titleText){
        let title = createElement("div", "basic-grid-title", titleText);
        grid.appendChild(title);
    }

    /*
        keszitsuk el a tablazatunk (grid) fejlecet
        - letrehozunk egy sor elemet (row)
        - vegigiteralunk a fejlecen
            - letrehozzuk a fejlec oszlopait
            - majd hozzaadjuk a fejlecsorhoz
    */

    row = createElement("div", "grid-row grid-head");
    grid.appendChild(row);

    headers.forEach( head => {
        cell = createElement("div", "grid-cell", head);
        row.appendChild(cell);
    });

    for (const d of data){
        row = createElement("div", "grid-row");
        grid.appendChild(row);

        for (const key of headers){
            cell = createElement("div", "grid-cell", d[key]);
            row.appendChild(cell);
        }
    }

    document.querySelector(renderTo).appendChild(grid);
}

renderGrid(
    USERS, 
    ["id","username", "lastName", "firstName", "email", "status"], 
    "#grid-container",
    "Felhasználók listája"
);