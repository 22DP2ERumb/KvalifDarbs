// Sidebar button
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});

// DarkMode button
const darkModeButton = document.getElementById('darkModeButton');
document.querySelector("#darkModeButton").addEventListener('click', function(){

    document.body.classList.toggle("dark-mode")
});
