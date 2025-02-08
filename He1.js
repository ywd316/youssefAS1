let inp = [...document.querySelectorAll('input')];
console.log(inp)
inp.forEach(e=>{
    e.addEventListener("keyup",()=>{
        if (inp.indexOf(e)+1 != inp.length){
            inp[inp.indexOf(e)+1].focus()
        }
    })
})
