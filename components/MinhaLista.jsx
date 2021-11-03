import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { getMovies } from "../hooks/useApi";
import styles from "../styles/MinhaLista.module.css";
import Modal from "./Modal";
import { MovieContext } from "../hooks/useContext";

export default function MinhaLista() {
    const [movies, setMovies] = useState([]);
    const [moveItems, setMoveItems] = useState(0);
    const [movieModal, setMovieModal] = useState(0);
    const {modalStatus, setModalStatus} = useContext(MovieContext);

    function handleMoveRight() {

    }

    function handleMoveLeft() {

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
                    modalStatus ? <Modal id={movieModal} /> : ""
                }
            </div>
            <div className={styles.list_movies}>
                {
                    movies.map(movie => (
                        <Image key={movie.id} className={styles.movie} width="280px" height="180px" src={movie.image} alt={movie.name} onClick={() => { handleModalOpen(movie.id) }} />
                    ))
                }
            </div>
        </>
    );
}