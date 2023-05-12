function toggleMode(){
    const mode = document.getElementById("mode");

    if(mode.className === "light-mode"){
        mode.className = "dark-mode";
    }else{
        mode.className = "light-mode";
    }
}