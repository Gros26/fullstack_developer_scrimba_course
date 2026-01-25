const favoriteFilm = {
    title: "Top Gun",
    year: "1986",
    genere: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
}

// const title = favoriteFilm.title
// const year = favoriteFilm.year
// const genere = favoriteFilm.genere
// const star = favoriteFilm.star
// const director = favoriteFilm.director

const {title, year, genere, star, director} = favoriteFilm

console.log(`My favorite film is ${title} starring ${star}. It is an ${genere} film that was directed by ${director} and released in ${year}.`)