const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const lastMovie = prompt('Один из последних просмотренных фильмов?', '');

const estimation = prompt('На сколько вы оцениваете его?', '');

const personMovieDB = {
    count: Number(numberOfFilms),
    movies: {
        lastMovie: estimation
    },
    actors: {},
    genres: [],
    privat: false
};

