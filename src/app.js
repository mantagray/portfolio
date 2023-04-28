const hamburguerButton = document.getElementById('hamburguer')
const navList = document.getElementById('nav-list')


function toggleButton() {
    navList.classList.toggle('show')
}

hamburguerButton.addEventListener('click', toggleButton)