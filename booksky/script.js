var popoverlay=document.querySelector(".pop-overlay")
var popbox=document.querySelector(".popup-box")
var addbutton=document.getElementById("add-popup")

addbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook1=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var Bookauthor=document.getElementById("bookauthor")
var bookdd=document.getElementById("bookdes")

addbook1.addEventListener("click",function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML =  `<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <br>
    <p>${bookdes.value}</p>
    <button onclick="dbook(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popbox.style.display="none"

})

function dbook(event)
{
    event.target.parentElement.remove()
}
