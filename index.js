const seachEl = document.getElementById("search")
const searchBtn = document.getElementById("search-btn")
const removeMe = document.getElementById("remove-me")

let movieHtml = ``
let watchlistArray = []
document.addEventListener("click", function (e) {
   const button = document.getElementById(e.target.dataset.add)
   // handle clicks
   if (e.target.dataset.add) {
      handleAdd(e.target.dataset.add)
      if (button) {
         button.innerHTML = `<i class=" fa-solid fa-check"></i>
                        <p>added</p>`
      }
   }
})

searchBtn.addEventListener("click", function (e) {
   e.preventDefault()
   fetch(`http://www.omdbapi.com/?apikey=916812ec&s=${seachEl.value}`)
      .then((res) => res.json())
      .then((data) => {
         renderData(data.Search)
      })
})

function renderData(movies) {
   movies.forEach((movie) => {
      fetch(`http://www.omdbapi.com/?apikey=916812ec&i=${movie.imdbID}`)
         .then((res) => res.json())
         .then((movie) => {
            const { Poster, Title, Ratings, Runtime, Genre, imdbID, Plot } =
               movie
            movieHtml += `
                <div class="display-container-movie">
               <img src="${Poster}" alt="N/A" class="img"/>
               <div class="col">
                  <div class="row">
                     <h1 class="title" style="color: black">${Title}</h1>
                     <h5 class="rating">⭐ ${Ratings[0].Value}</h5>
                  </div>
                  <div class="row">
                     <h5 class="runtime" style="font-weight: 100;">${Runtime}</h5>
                     <h5 class="genre">${Genre}</h5>
                     <div class="watchlist" id="${imdbID}">
                        <button data-add=${imdbID} id="btn">
                           <i class="fa-solid fa-circle-plus btns"></i>watchlist
                        </button>
                        
                     </div>
                  </div>
                  <p class="plot">
                     ${Plot}
                  </p>
               </div>
            </div>`

            // console.log(movie)
            render()
         })
   })
}
function render() {
   document.getElementById("movies").innerHTML = movieHtml
}
function handleAdd(movieId) {
   watchlistArray.unshift(movieId)
   localStorage.setItem("watchlist", JSON.stringify(watchlistArray))
}
