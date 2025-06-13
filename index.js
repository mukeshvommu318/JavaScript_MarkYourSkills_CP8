
let arr =["HTML","CSS","JS"]

function doToggle(labelId,inId){
    let iptoggEle = document.getElementById(inId)
    let labelToggEle = document.getElementById(labelId)

    labelToggEle.classList.toggle("checked")
    
}

let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

let headingElement = document.createElement("h1")
headingElement.textContent="Mark Your Skills"
container.appendChild(headingElement)

let subDiv = document.createElement("div")
container.appendChild(subDiv)

for (let i = 0; i<arr.length;i++){
     let inId = "ipId" + i;
    let labelId = "labelId"+i

    let inputElement = document.createElement("input")
    inputElement.type="checkbox"
    inputElement.setAttribute("id",inId)
    subDiv.appendChild(inputElement)

    inputElement.onclick=function(){
        doToggle(labelId,inId)
    }

    let labelElement = document.createElement("label")
    labelElement.textContent=arr[i]
    labelElement.id=labelId
    labelElement.htmlFor=inId
    labelElement.style.fontSize="25px"
    labelElement.style.marginLeft="10px"
    subDiv.appendChild(labelElement)

    let breakElement = document.createElement("br")
    subDiv.appendChild(breakElement)
}


console.log(container)
