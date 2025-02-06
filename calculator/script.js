//anybody can suggest me how to resolves the issues on this code
const button=document.querySelectorAll(".btn");

const input=document.querySelector("#in");
let str="";
// using for each function to get the numbers from the user. 
button.forEach((btn)=>{
  btn.addEventListener("click",()=>{ // this code still have many issues on which i am working.
    if(btn.innerText!=="="){
    str+=btn.innerText;
    input.value=str;
    console.log(str);
    }
    else if(btn.innerText==="=")
    {
        input.value=eval(str)
        str="";
    }
  })  
})

