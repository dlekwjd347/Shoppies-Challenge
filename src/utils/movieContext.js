import { createContext} from 'react';

const movieContext = createContext({
    movie: "",
    setMovieNom: () => { },
    nominated: false,
    setNominated: () => { }
})

export default movieContext;