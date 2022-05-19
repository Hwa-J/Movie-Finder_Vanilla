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
  // const close = document.querySelectorAll('.modal__close')

  // // touch device 지원 확인 함수 (iOS 모바일 기기 click event 오류 개선용)
  // let clickEvent = (() => {
  //   if ('ontouchstart' in document.documentElement === true) {
  //     return 'touchstart';
  //   } else {
  //     return 'click';
  //   }})();

  // for (let btn of close) {
  //   btn.addEventListener( 'click' , () => {
  //     console.log('oh')
  //     modal.classList.add('hidden')
  //   })
  // }

  for (let on of modal) {
    on.addEventListener('click', (e) => {
      // 모달창 바깥 영역
      if (e.target.classList.contains('modal') 
      // 모달찰 닫기 버튼
      || e.target.classList.contains('modal__close')) {
        on.classList.add('hidden')
      }
      // else if (e.target.classList.contains('modal__close')) {
      //   on.classList.add('hidden')
      // }
    })
  }
}