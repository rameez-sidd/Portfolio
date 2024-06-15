document.querySelector("#menu-icon-container").addEventListener("click", openMenu);
function openMenu(){
    let menu = document.getElementById("mobile-navbar-section");
    let iconContainer = document.getElementById("menu-icon-container");
    let icon = document.getElementById("menu-icon");
    let body = document.getElementById("body-section");
    if (menu.style.top == "-100%") {
        menu.style.top = "48px";
        icon.setAttribute("class", "fa-solid fa-xmark"); 
        iconContainer.style.marginRight = "4px";
        body.style.overflow = "hidden";
    }
    
    else {
        menu.style.top = "-100%";
        body.style.overflow = "scroll";
        setTimeout(() => {   
            icon.setAttribute("class", "fa-solid fa-bars");
            iconContainer.style.marginRight = "0px";         
        }, 450); 

    }
}
