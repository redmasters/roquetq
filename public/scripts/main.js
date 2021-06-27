import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButon = document.querySelector('.modal button')

// Pegar todos os botoes com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // Pegar quando marcar como lido for clicado
    //add escuta
    button.addEventListener("click", handleClick) 
})


// Quando o botao delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
    }
)

function handleClick(event, check = true) {
    event.preventDefault()
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id
    const slug = check ? "check" : "delete"
    const text = check ? "Marcar como lida" : "Excluir" 
    
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `question/${roomId}/${questionId}/${slug}`)


    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButon.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButon.classList.remove("red") : modalButon.classList.add("red")

    // Abrir modal    
    modal.open()
}
