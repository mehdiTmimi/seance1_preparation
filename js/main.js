
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
    let td3=document.createElement("td")
    let button=document.createElement("button")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td3.appendChild(button)
    button.innerText="supprimer"
 //   button.setAttribute("onclick","supprimer()")
/*button.addEventListener("click",()=>{
        supprimer(tr.getAttribute("id"))
    })*/
    button.addEventListener("click",(event)=>{
        supprimer(event.target.parentNode.parentNode)
    })
    // remplissage 
    td1.innerText=nom
    td2.innerText=prenom
    //lisaison avec le tbody
    document.getElementById("tb").appendChild(tr)
    //vider les champs
    nomInput.value=""
    prenomInput.value=""
}
let supprimer=(ele)=>{
    ele.remove()
}