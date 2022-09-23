const teste=()=>{
    alert("bonjour")
}
const ajouter=()=>{
    //recuperation des elements moyennant les ids

    let nomInput= document.getElementById('nom')
    let prenomInput=document.getElementById('prenom')
    // recuperation des valeurs
    let nom = nomInput.value
    let prenom=prenomInput.value
    // creation des elements
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    tr.appendChild(td1)
    tr.appendChild(td2)
    // remplissage 
    td1.innerText=nom
    td2.innerText=prenom
    //lisaison avec le tbody
    document.getElementById("tb").appendChild(tr)
    //vider les champs
    nomInput.value=""
    prenomInput.value=""
}