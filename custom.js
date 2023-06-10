var a=document.querySelectorAll("ul li");
function ac(x){
 x.classList.toggle("red");
}
function tikla() {
    event.preventDefault()
    var name1=document.querySelector(".name").value;
    var text1=document.querySelector(".text").value;
    var newList=document.createElement("li");
    newList.addEventListener("click",function() {
         newList.classList.toggle("red");
    })
    if (name1!='' && text1!='') {
    var newName=document.createElement("h1");
    var newicon=document.createElement("i");
    newicon.classList.add("fa-solid")
    newicon.classList.add("fa-pen-nib")
    newName.innerText=name1;
    var newText=document.createElement("p");
    var newRemove=document.createElement("button");
    newText.innerText=text1;
    newList.appendChild(newName);
    newList.appendChild(newicon);
    newList.appendChild(newText);
    newList.appendChild(newRemove);
    newRemove.innerText="sil";
    newRemove.classList.add("sil");
    newRemove.addEventListener("click",function () {
        newRemove.parentNode.remove()
    })
    document.querySelector("ul").appendChild(newList)
}

}

function remove(z) {
    z.parentNode.remove();
}