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

  // touch device 지원 확인 함수 (iOS 모바일 기기 click event 오류 개선용)
  let clickEvent = (() => {
    if ('ontouchstart' in document.documentElement === true) {
      return 'touchstart';
    } else {
      return 'click';
    }})();

  for (let btn of close) {
    btn.addEventListener( clickEvent , (btnClose) => {
      // X버튼 클릭시 모달창의 조상요소의 classList에 'hidden'추가
      btnClose.path[4].classList.add('hidden')})
  }
}