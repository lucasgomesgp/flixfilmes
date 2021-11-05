import { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { getMovies } from "../hooks/useApi";
import { MovieContext } from "../hooks/useContext";
import Modal from "./Modal";
import styles from "../styles/MinhaLista.module.css";

export default function MinhaLista() {
    const [movies, setMovies] = useState([]);
    const {modalStatus, setModalStatus, modalStatusHome} = useContext(MovieContext);
    const [movieModal, setMovieModal] = useState(0);
    const carousel = useRef(null);

    function handleMoveRight(event) {
        event.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    
    function handleMoveLeft(event) {
        event.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    function handleModalOpen(id) {
        setMovieModal(id);
        setModalStatus(!modalStatus);
    }

    useEffect(() => {
        async function setAllMovies() {
            const { data } = await getMovies();
            setMovies(data);
        }
        setAllMovies();
    }, []);
    return (
        <>
            <h1 className={styles.list_title}>Minha lista</h1>
            <div className={styles.arrows}>
                <IoIosArrowBack className={styles.moveLeft} color="white" size={48} onClick={handleMoveLeft} />
                <IoIosArrowForward className={styles.moveRight} color="white" size={48} onClick={handleMoveRight} />
            </div>
            <div className={styles.modalMovie}>
                {
                    modalStatus && modalStatusHome === false ? <Modal id={movieModal} /> : ""
                }
            </div>
            <div className={styles.list_movies} ref={carousel}>
                {
                    movies.map(movie => (
                        <Image key={movie.id} priority className={styles.movie} width="280px" height="180px" src={movie.image} alt={movie.name} onClick={() => { handleModalOpen(movie.id) }} />
                    ))
                }
            </div>
        </>
    );
}