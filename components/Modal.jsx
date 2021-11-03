import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FaRegWindowClose } from "react-icons/fa";
import { getMovieId } from "../hooks/useApi";
import styles from "../styles/Modal.module.css";
import { MovieContext } from "../hooks/useContext";

export default function Modal({ id }) {
    const [movie, setMovie] = useState();
    const { modalStatus, setModalStatus } = useContext(MovieContext);

    async function movieCurrent() {
        const movieSelect = await (await getMovieId(id)).data;
        setMovie(movieSelect);
    }

    function handleToggleModal() {
        setModalStatus(!modalStatus);
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
                    <p>{movie.description}</p>
                </div>
            </div>
        ) : ""
    );
}