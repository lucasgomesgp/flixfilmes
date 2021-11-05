import { useState, createContext, useEffect } from "react";
import { getNumberTotalMovies } from "./useApi";

export const MovieContext = createContext({});

export function ContextProvider({ children }) {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalStatusHome, setModalStatusHome] = useState(false);
    const [movieHome, setMovieHome] = useState(1);

    useEffect(() => {
        async function getMovieRandom() {
            const number = await getNumberTotalMovies();
            const random = Math.floor(Math.random() * number) ;
            const randomValueWithVerification = random !== 0 ? random : number;
            setMovieHome(randomValueWithVerification);
        }
        getMovieRandom();
    }, []);

    return (
        <MovieContext.Provider value={{
            modalStatus, setModalStatus, movieHome, 
            modalStatusHome, setModalStatusHome 
        }}>
            {children}
        </MovieContext.Provider>
    );
}