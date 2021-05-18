const sidebar = document.querySelector('#sidebar');
const button = document.querySelector('#button-menu');

button.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar--open");
        button.classList.toggle("open");
    }, false);

        
