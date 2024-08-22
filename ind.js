let menuBar = true
function menu(){
    if(menuBar){
        let btn = document.querySelector(".btn")
        btn.style.display = "block"
        btn.style.float= "right"
        btn.style.backgroundColor="green"
        btn.style.width="40vw"
        btn.style.height="50vh"
        btn.style.borderRadius="20px"
        btn.style.position="flex"
        btn.style.boxShadow="0 0 10px rgba(0,0,0)"
        btn.style.zIndex="3"
        menuBar=false
    }
    else{
        let btn_1 = document.querySelector(".btn")
        btn_1.style.display="none"
        menuBar=true
    }
}

let but = document.getElementById("but1");
but.addEventListener("click", menu);