var btn=document.querySelectorAll("button")
var display=document.querySelector("input")
var storage=[]
var result=0;
function calc(value){
if (value=="AC") {
   storage=[]
   result=0
   display.value=result
}
else if (value=="=") {
    var final=storage.join("")   //join method to remover the ,  from array
    result=eval(final)            // eval() is bydefault method
    display.value=result
}
else{
    storage.push(value)
    var final=storage.join("") 
    display.value=final
}
}



console.log(btn);
btn.forEach((e)=>{
    // console.log(e);
    e.addEventListener("click",()=>{
        calc(e.innerHTML);
    })
})
