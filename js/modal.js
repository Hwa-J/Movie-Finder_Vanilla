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

// 모달창 닫기 기능
export function modalClose () {
  const modal = document.querySelectorAll('.modal')

  for (let open of modal) {
    open.addEventListener('click', (e) => {
      // 모달창 바깥 영역
      if (e.target.classList.contains('modal') 
      // 모달찰 닫기 버튼
      || e.target.classList.contains('modal__close')) {

        open.classList.add('hidden')
      }
    })
  }
}