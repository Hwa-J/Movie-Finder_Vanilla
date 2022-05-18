import 'regenerator-runtime'
import '../scss/main.scss'
import * as modal from './modal'

const searchBar = document.querySelector('.search-bar')
const searchForm = document.querySelector('.search__form')
const movieList = document.querySelector('.movies')
const responseBox = document.querySelector('.response__text')
// fetchMoreTrigger 요소를 화면에 배치하지 않으면 observe가 인식 못함
const fetchMoreTrigger = document.querySelector('.response__more') 
const movieDetailInfo = document.querySelector('.detail')

// 값 재사용을 위한 변수들
let searchValue = searchBar.value
let page = 1
let totalResults = ''
let totalPages= ''


// 영화정보 요청 함수
async function getMovie(page = 1) {
  const OMDB_API_KEY = '7035c60c'
  let title = searchValue
  let res = await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}&page=${page}`)
  res = await res.json()

  try {
    
    await renderMovies(res)
    
    // 영화 정보가 나타나면 More 화면에 나오도록 함
    fetchMoreTrigger.classList.remove('hidden')
    // 영화 정보 중 총 검색 결과 값을 숫자로 변환해 받음
    totalResults = Number(res.totalResults)
    responseBox.innerHTML = `
    <div>검색어 "<strong>${title}</strong>"에 대한 총 <strong>${totalResults}</strong>건의 영화 정보를 찾았습니다.</div>`
    responseBox.classList.remove('wait')
    return res
    
  } catch(error) {

    fetchMoreTrigger.classList.add('hidden')
    responseBox.classList.add('wait')
    modal.modalError()
  }
}


// 검색어 제출(클릭) 함수
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  // 새로운 검색 값 받음
  searchValue = searchBar.value
  // 이전 생성요소 삭제(초기화)
  movieList.innerHTML = ''
  responseBox.innerHTML = ''
  page = 1
  totalResults = ''
  totalPages = ''
  try {

    responseBox.classList.add('loading')
    await getMovie()
    responseBox.classList.remove('loading')
    fetchMoreTrigger.classList.add('responsed')
    return searchValue
  }
  catch(error) {
    responseBox.classList.remove('loading')
    fetchMoreTrigger.classList.add('hidden')
    responseBox.classList.add('wait')
    modal.modalError()
  }
})


// 영화 정보를 담은 HTML요소를 화면에 출력하는 함수 
function renderMovies (res) {
  res.Search.forEach( (resMovie) => { 

    const liEl = document.createElement('li')
    liEl.classList.add('movie')
    liEl.id = resMovie.imdbID

    // 이미지 소스 없을때 대체 이미지 파일로 교체
    if (resMovie.Poster === "N/A") {
      resMovie.Poster = `${'./images/NoImage_Available.png'}`
    }

    liEl.innerHTML = `
      <img src="${resMovie.Poster}" alt="${ resMovie.Title }" class="movie__poster">
      <div class="movie__info">
        <div class="movie__info--title">
        ${resMovie.Title}
        </div>
        <div class="movie__info--year">
        (${resMovie.Year})
        </div>
      </div>
    `

    movieList.append(liEl)


    liEl.addEventListener('click', (e) => {
      let imdbID = e.target.parentElement.id
      getMovieDetailInfo(imdbID)
    })
  })
}


const fetchMore = async () => {
  // 영화의 총 결과 개수 중 1페이자당 10개씩 나옴 
  totalPages = Math.ceil( totalResults / 10 )
  fetchMoreTrigger.classList.add('loading')
  if (totalPages !== page) {
    await getMovie( page += 1 )
  }else {
    // 마지막 페이지에서 observe의 관찰요소 숨기기
    fetchMoreTrigger.classList.add('hidden')
  }
  fetchMoreTrigger.classList.remove('loading')
}
const fetchMoreObserver = new IntersectionObserver(
  ([{ isIntersecting}]) => {
      if (isIntersecting) {
        fetchMore()
      }
  }
)
fetchMoreObserver.observe(fetchMoreTrigger)


async function getMovieDetailInfo (imdbID) {
  const OMDB_API_KEY = '7035c60c'
  let res = await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&i=${imdbID}`)
  res = await res.json()
  
  try {

    await modal.modalMovie()
    movieDetailInfo.classList.add('loading')
    await createDetailInfo(res)
    movieDetailInfo.classList.remove('loading')
    return res

  } catch(error) {

    alert("상세정보 없음")
  }
}


const createDetailInfo = (resDetail) => { 
  const imgEl = document.createElement('img')
  const ulEl = document.createElement('ul')

  // 새로 검색시 이전 생성요소 삭제
  movieDetailInfo.innerHTML = ''
  
  imgEl.classList.add('detail__poster')
  imgEl.src = resDetail.Poster
  imgEl.alt = resDetail.Title

  let ratings = ''
  // Ratings 배열에 정보가 없을 때 에러 모달 방지
  if (resDetail.Ratings.length > 1) {
    ratings = resDetail.Ratings[0].Value
  }else {
    ratings = 'N/A'
  }

  ulEl.classList.add('detail__info')
  ulEl.innerHTML = `
    <li class="detail__info--title">${resDetail.Title}</li>
    <li class="detail__info--released">
      <div class="detail_name">Released</div>
      <div class="detail_value">${resDetail.Released}</div>
    </li>
    <li class="detail__info--ratings">
      <div class="detail_name">Ratings</div>
      <div class="detail_value">${ratings}</div>
    </li>
    <li class="detail__info--genre">
      <div class="detail_name">Genre</div>
      <div class="detail_value">${resDetail.Genre}</div>
    </li>
    <li class="detail__info--country">
      <div class="detail_name">Country</div>
      <div class="detail_value">${resDetail.Country}</div>
    </li>
    <li class="detail__info--runtime">
      <div class="detail_name">Runtime</div>
      <div class="detail_value">${resDetail.Runtime}</div>
    </li>
    <li class="detail__info--actors">
      <div class="detail_name">Actors</div>
      <div class="detail_value">${resDetail.Actors}</div>
    </li>
    <li class="detail__info--director">
      <div class="detail_name">Director</div>
      <div class="detail_value">${resDetail.Director}</div>
    </li>
    <li class="detail__info--plot">
      <div class="detail_name">Plot</div>
      <div class="detail_value">${resDetail.Plot}</div>
    </li>
  `
  movieDetailInfo.append(imgEl)
  movieDetailInfo.append(ulEl)
}