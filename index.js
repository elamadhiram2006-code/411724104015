console.log("Hello")
const first=document.getElementById("p1")
first.innerHTML="Some text"
function example(){
    console.log("Good byee")
}
const input=document.getElementById("input")
const output=document.getElementById("output")
input.addEventListener("input",()=>{
    // output.textContent=input.value
    output.innerHTML=input.value

})


const second =document.createElement("p")
second.textContent="New peargraph"
document.body.appendChild(second)

second.remove()