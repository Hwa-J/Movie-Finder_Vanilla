export const modalMovieDetail = document.querySelector('.modal__movie_detail')

export function modalError () {
  const modalError = document.querySelector('.modal__error')
  modalError.classList.remove('hidden')
  modalClose()
}

export function modalMovie () {
  modalMovieDetail.classList.remove('hidden')
  modalClose()
}

export function modalClose () {
  const close = document.querySelectorAll('.modal__close')

  for (let btn of close) {
    btn.addEventListener('click', (modalBox) => {
      // 모달창의 조상요소의 classList에 'hidden'추가
      modalBox.path[4].classList.add('hidden')})
  }
}