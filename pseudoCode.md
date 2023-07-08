GET INPUT USER - put in search button click event inside of that get the data from the api // done
RENDER HTML - render the html into the container page // done
GET WATCHLIST DATA - put in an empty array put into local storage to access from watchlist page // done
CREATE A FUNCTION - to get and extract the data from array after that display it into watchlist container // done
REPLACE +watchlist button - into added // done
ADD REMOVE BUTTON - in my watchlist container make sure it its accurate //

<!-- for wathhst container -->

<!-- `<div class="display-container-movie">
//                <img src="${data.Poster}" alt="N/A" class="img" />
//                <div class="col">
//                   <div class="row">
//                      <h1 class="title" style="color: black">${data.Title}</h1>
//                      <h5 class="rating">⭐ ${data.Ratings[0].Value}</h5>
//                   </div>
//                   <div class="row">
//                      <h5 class="runtime" style="font-weight: 100;">${data.Runtime}</h5>
//                      <h5 class="genre">${data.Genre}</h5>
//                      <div class="watchlist">
//                         <button data-remove=${data.imdbID}>
//                            <i class="fa-solid fa-circle-plus btns"></i>watchlist
//                         </button>
//                      </div>
//                   </div>
//                   <p class="plot">
//                      ${data.Plot}
//                   </p>
//                </div>
//             </div>` -->

<!-- for render searched movies -->

<!-- `
                <div class="display-container-movie">
               <img src="${data.Poster}" alt="N/A" class="img" />
               <div class="col">
                  <div class="row">
                     <h1 class="title" style="color: black">${data.Title}</h1>
                     <h5 class="rating">⭐ ${data.Ratings[0].Value}</h5>
                  </div>
                  <div class="row">
                     <h5 class="runtime" style="font-weight: 100;">${data.Runtime}</h5>
                     <h5 class="genre">${data.Genre}</h5>
                     <div class="watchlist">
                        <button data-add=${data.imdbID}>
                           <i class="fa-solid fa-circle-plus btns"></i>watchlist
                        </button>
                        <i class=" fa-solid fa-check"></i>
                        <p>added</p>
                     </div>
                  </div>
                  <p class="plot">
                     ${data.Plot}
                  </p>
               </div>
            </div>` -->

<!-- added -->

<i class=" fa-solid fa-check"></i>
<p>added</p>
