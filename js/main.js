import '../scss/main.scss'

const searchBar = document.querySelector('.search-bar')
const searchForm = document.querySelector('.search__form')


async function getMovie(title) {
  const OMDB_API_KEY = '7035c60c'


  
    let res = await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
    res = await res.json()
    console.log(res)
    try {
    // for (let i = 0; i < res.length; += i) += 연산자 에러 남
    for (let i = 0; i < res.Search.length; ++ i) {
      let movie = document.querySelector(`.movie_${ i + 1 }`)
      let movieInfo = movie.querySelector(`.info_${ i + 1 }`)

      // 변수 선언 생략 가능하지만 유지보수를 위해 남겨둬야 할까?
      let resPoster = res.Search[i].Poster
      let resTitle = res.Search[i].Title
      let resYear = res.Search[i].Year
      
      movie.children[0].src = resPoster
      movie.children[0].alt = resTitle
      movieInfo.children[0].textContent = resTitle
      movieInfo.children[1].textContent = `(${resYear})`
    }
    console.log(res)
    return res
  } catch(error) {
    console.log(error)
    alert(`${error}`)
  }
}


searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  let value = searchBar.value
  try {
    await getMovie(`${value}`)
  }
  catch(error) {
    console.log(error)
    alert('재검색 해주세요!')
  }
})

