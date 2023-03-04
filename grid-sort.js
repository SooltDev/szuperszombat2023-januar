
function createElement(tagName, cssName, content){
    const element = document.createElement(tagName);

    element.className = cssName;

    if (content){
        element.innerHTML = content;
    }

    return element;
}

function renderGrid(data, headers, renderTo, titleText){
    const grid = createElement("div", "basic-grid");
    let row, cell;
    const order = {
        asc: "▲", //novekvo - Alt+30
        desc: "▼" //csokkeno - Alt+31
    }

    document.querySelector(renderTo).innerHTML = "";

    if (titleText){
        let title = createElement("div", "basic-grid-title", titleText);
        grid.appendChild(title);
    }

    row = createElement("div", "grid-row grid-head");
    grid.appendChild(row);

    headers.forEach( head => {
        cell = createElement("div", "grid-cell", head.text);
        cell.style.width = head.width ? head.width : "100%";

        if (head.sortable){

            const sortableElement = head.order ? 
                createElement("span", "grid-sort " + head.order, order[head.order]) :
                createElement("span", "grid-sort", "♦");

            cell.appendChild(sortableElement);

            sortableElement.onclick = function(){

                let order = this.classList.contains("asc") ? "desc" : "asc";

                headers.forEach(h => h.order = undefined);

                head.order = order;
                
                const sortData = data.sort( (el, nextEl) => {
                    let element, nextElement;

                    if (order == "asc"){
                        element = el[head.key];
                        nextElement = nextEl[head.key];
                    }else{
                        element = nextEl[head.key];
                        nextElement = el[head.key];
                    }

                    if (element > nextElement)
                        return 1;
                    if (element == nextElement)
                        return 0;
                    
                    return -1;
                } );

                renderGrid(sortData, headers, renderTo, titleText);

            }// end sort click

        } // end if head.sortable

        row.appendChild(cell);

    }); // end headers.forEach

    for (const d of data){
        row = createElement("div", "grid-row");
        grid.appendChild(row);

        row.onclick = function(){
            let addOrRemove = this.classList.contains("selected-row") ? "remove" : "add";
            grid.querySelectorAll(".selected-row").forEach(r => r.classList.remove("selected-row"));
            this.classList[addOrRemove]("selected-row");
        }

        for (const head of headers){
            cell = createElement("div", "grid-cell", 
                head.render ? head.render(d) : d[head.key]
            );
            cell.style.width = head.width ? head.width : "100%";
            row.appendChild(cell);
        }

    }

    document.querySelector(renderTo).appendChild(grid);
}

renderGrid(
    USERS, 
    [
        {key: "id", text: "ID", width: "30%", sortable: true},
        {key: "username", text: "Felhasználónév", sortable: true},
        {key: "email", text: "Email"},
        {key: "lastName", text: "Családnév"},
        {key: "firstName", text: "Keresztnév"},
        {
            key: "status", 
            text: "Státusz", 
            width: "50%", 
            sortable: true, 
            render: function(dataRow){
                let style = dataRow.status == "admin" ? "color: red" : "";
                return `<span style="${style}">${dataRow.status}<span>`;
            }},
    ], 
    "#grid-container",
    "Felhasználók listája"
);