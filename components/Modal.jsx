import { useContext, useEffect, useState } from "react";
import { getMovieId } from "../hooks/useApi";
import { MovieContext } from "../hooks/useContext";
import { useRouter } from "next/router";
import styles from "../styles/Modal.module.css";

export default function Modal({ id }) {
    const [movie, setMovie] = useState();
    const { modalStatus, setModalStatus, modalStatusHome, setModalStatusHome } = useContext(MovieContext);
    const router = useRouter();

    async function movieCurrent() {
        if (id !== 0) {
            const movieSelect = await (await getMovieId(id)).data;
            setMovie(movieSelect);
        }
    }

    function handleToggleModal() {
        if(modalStatusHome === false){
            setModalStatus(!modalStatus);
        }
        if(modalStatus === false){
            setModalStatusHome(!modalStatusHome);
            window.location.reload();
        }
    }
    useEffect(() => {
        movieCurrent();
    }, []);

    return (
        movie ? (
            <div className={styles.overlay} onClick={handleToggleModal}>
                <div className={styles.modal}>
                    <iframe
                        width="500" height="320"
                        src={`${movie.movieSrc}?autoplay=1&controls=0`}
                        title={movie.name} frameBorder="0"
                        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
                    <h1>{movie.name}</h1>
                    <div className={styles.infosModal}>
                        <p className={styles.description}>{movie.description}</p>
                        <p><span className={styles.genre}>Gênero:</span> {movie.genre}</p>
                    </div>
                </div>
            </div>
        ) : ""
    );
}