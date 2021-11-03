import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMovieId } from "../../hooks/useApi";
import styles from "../../styles/Id.module.css";

export default function MovieSelected() {
    const router = useRouter();
    const [movie, setMovie] = useState();
    
    async function movieCurrent(id) {                    
        console.log(id);                                                                                                                                                                                             
        const movieSelect = await (await getMovieId(id)).data;
        setMovie(movieSelect);
    }
    
    useEffect(() => {
        const id = +router.query.id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        movieCurrent(id);
        console.log(movie);
    }, []);

    return (
        <h1 style={{ opacity: "0.1" }}>Teste</h1>
    );
}