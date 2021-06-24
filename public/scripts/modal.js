export default function Modal() {
    
    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')
    cancelButton.addEventListener('click', close) 

    function open() {
        // add class 'active' para a modal
        modalWrapper.classList.add("active")
    }
    function close() {
        // remove class 'active' da modal
       modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}