export default function modalError () {
  const modalError = document.querySelector('.modal__error')
  const close = modalError.querySelector('.popup__close')
  
  modalError.classList.remove('hidden')
  close.addEventListener('click', () => modalError.classList.add('hidden'))
}