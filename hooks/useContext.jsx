import { useState, createContext, useEffect } from "react";
import { getNumberTotalMovies } from "./useApi";

export const MovieContext = createContext({});

export function ContextProvider({ children }) {
    const [modalStatus, setModalStatus] = useState(false);
    const [moveHome, setMoveHome] = useState(1);

    useEffect(() => {
        async function getMovieRandom() {
            const number = await getNumberTotalMovies();
            //Gerar o número aleatório com base no tamanho do array de filmes
        }
        getMovieRandom();
    }, []);

    return (
        <MovieContext.Provider value={{ modalStatus, setModalStatus }}>
            {children}
        </MovieContext.Provider>
    );
}