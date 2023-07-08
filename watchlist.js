const watchlistContainer = document.getElementById("watchlist")
const watchlistArray = JSON.parse(localStorage.getItem("watchlist"))
let deleteIndex
document.addEventListener("click", function (e) {
   if (e.target.dataset.remove) {
      watchlistArray.forEach((item, index) => {
         if (item === e.target.dataset.remove) {
            deleteIndex = index
            // console.log(deleteIndex)
            watchlistArray.splice(deleteIndex, 1)
            localStorage.setItem("watchlist", JSON.stringify(watchlistArray))
            console.log(deleteIndex)
         }
      })
   }
   displayWatchlist()
})

function displayWatchlist() {
   let watchlistHtml = ``

   watchlistArray.map(function (movie) {
      fetch(`http://www.omdbapi.com/?apikey=916812ec&i=${movie}`)
         .then((res) => res.json())
         .then((movie) => {
            const { Poster, Title, Ratings, Runtime, Genre, imdbID, Plot } =
               movie
            watchlistHtml += `<div class="display-container-movie">
                <img src="${Poster}" alt="N/A" class="img" />
                <div class="col">
                   <div class="row">
                      <h1 class="title" style="color: black">${Title}</h1>
                      <h5 class="rating">⭐ ${Ratings[0].Value}</h5>
                   </div>
                   <div class="row">
                      <h5 class="runtime" style="font-weight: 100;">${Runtime}</h5>
                      <h5 class="genre">${Genre}</h5>
                      <div class="watchlist">
                         <button data-remove=${imdbID}>
                            <i class="fa-solid fa-circle-minus btns"></i>watchlist
                         </button>
                      </div>
                   </div>
                   <p class="plot">
                      ${Plot}
                   </p>
                </div>
             </div>`
            console.log(movie)
            watchlistContainer.innerHTML = watchlistHtml
         })
      console.log(movie)
   })
}
displayWatchlist()
console.log(watchlistArray)
