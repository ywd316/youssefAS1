let upper = document.querySelector(".container .body-box .upper-box");
let text = document.querySelector(".title");
let word =  document.querySelector(".word");
upper.addEventListener("click",()=>{
    if (upper.classList.contains("active")){
        upper.classList.remove("active");
    }
    else{
        upper.classList.add("active");

    }

})
text.addEventListener("click", () => {
    if (text.classList.contains("active")) {
        text.classList.remove("active");
        word.innerHTML = "Happy birthday to uu";
        
    }
    else {
        text.classList.add("active");
        word.innerHTML = "Best doctor hehehe";

    }

})

