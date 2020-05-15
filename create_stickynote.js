function creaPostIt() {
    let testo = document.getElementById("idUnico1").value;

    let colore = document.getElementById("sel£ct").value;

    let nota = document.createElement("div");

    nota.style.backgroundColor = colore;

    if(testo === "")
        testo="*** VUOTO ***";

    nota.setAttribute("class", "d1v");

    let box = document.createTextNode(testo);

    nota.appendChild(box);
    document.body.appendChild(nota);

    let ics = document.createElement("img");
    ics.src = "images/delete.png";
    nota.appendChild(ics);

    document.getElementById("idUnico1").value = "";

    ics.onclick = function () {
        nota.parentNode.removeChild(nota);
    }
}