// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

const sideBarClasses = document.querySelector("#app-sidebar");
    
    document.querySelector("#menu-sidebar").addEventListener("click", () =>{
    document.querySelector("#app-sidebar").classList.toggle ("show");
});
