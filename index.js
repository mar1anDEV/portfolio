const Open$menu = document.querySelector('.open-menu');
const Close$menu = document.querySelector('.close-menu');
const menu = document.getElementById('menuList');
menu.style.maxHeight = "0px";

    Open$menu.addEventListener('click', () => {
        menu.style.maxHeight = "500px";
        Open$menu.style.display = "none"
        Close$menu.style.display = "block";
    });

    Close$menu.addEventListener('click', () => {
        menu.style.maxHeight = "0px";
        Open$menu.style.display = "block"
        Close$menu.style.display = "none";
        
    });

