import { useState, createContext } from "react";

export const MovieContext = createContext({});

export function ContextProvider({ children }) {
    const [modalStatus, setModalStatus] = useState(false);

    return (
        <MovieContext.Provider value={{ modalStatus, setModalStatus }}>
            {children}
        </MovieContext.Provider>
    );
}