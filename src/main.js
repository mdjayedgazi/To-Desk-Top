import './style.css'

const navDialog = document.getElementById('nav-dialog');
globalThis.handleMenu = function () {
    navDialog.classList.toggle('hidden');
}