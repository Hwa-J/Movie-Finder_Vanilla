import '../scss/main.scss'
import modalError from './moda_error'

const searchBar = document.querySelector('.search-bar')
const searchForm = document.querySelector('.search__form')


async function getMovie(title, num=1) {
  const OMDB_API_KEY = '7035c60c'
    let res = await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}&page=${num}`)
    res = await res.json()
    console.log(res)
    res.Search.forEach((i,index) => console.log(i,index))
    try {
    await renderMovie(res)

    return res
  } catch(error) {
    modalError()
  }
}


searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  let value = searchBar.value
  try {
    await getMovie(`${value}`)
  }
  catch(error) {
    modalError()
  }
})

function renderMovie (res) {
  res.Search.forEach( (resMovie, index) => {
    
    createItem(resMovie, index)

    let movie = document.querySelector(`.movie_${ index + 1 }`)
    let movieInfo = movie.querySelector(`.info_${ index + 1 }`)

    movie.children[0].src = resMovie.Poster
    // movie.children[0].alt = resMovie.Title
    movieInfo.children[0].textContent = resMovie.Title
    movieInfo.children[1].textContent = `(${resMovie.Year})`
  })
}

function createItem (resMovie, index) {
  const movieList = document.querySelector('.movies')
  const liEl = document.createElement('li')
  liEl.classList.add('movie')
  liEl.innerHTML = `
  <a href="javascript:void(0)" class="movie_${ index + 1 }">
    <img src="" alt="${ resMovie.Title }" class="movie__poster">
    <div class="movie__info info_${ index + 1 }">
      <div class="movie__info--title"></div>
      <div class="movie__info--year"></div>
    </div>
  </a>
  `
  movieList.append(liEl)
}