import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { VscInfo } from "react-icons/vsc";
import { MovieContext } from "../hooks/useContext";
import Modal from "./Modal";
import { getMovieId } from "../hooks/useApi";
import styles from "../styles/BackgroundInitialItem.module.css";

export default function BackgroundInitialItem() {
    const { modalStatusHome, setModalStatusHome, movieHome } = useContext(MovieContext);
    const [movie, setMovie] = useState();
    const container = useRef(null);
    const buttons = useRef(null);

    function handleOpenModalItemHome() {
        setModalStatusHome(!modalStatusHome);
        container.current.style.position = "static";
        buttons.current.style.display = "none";
        
    }

    async function getMovieHome() {
        if (movieHome !== 0) {
            const movieHomeSorted = await (await getMovieId(movieHome)).data;
            setMovie(movieHomeSorted);
        }

    }

    useEffect(() => {
        getMovieHome();
    }, []);
    return (
        <div className={styles.containerItem} ref={container}>
            <div className={styles.buttons} ref={buttons}>
                {
                    movie ? <h1>{movie.name}</h1> : ""

                }
                <button className={styles.play} onClick={handleOpenModalItemHome}>
                    <FaPlay />
                    <span className={styles.text}>
                        Assistir
                    </span>
                </button>
                <button className={styles.infos} onClick={handleOpenModalItemHome}>
                    <VscInfo />
                    <span className={styles.text}>
                        Mais informações
                    </span>
                </button>
            </div>
            {
                modalStatusHome && movie !== 0 ? <Modal id={movie.id} /> : ""
            }
            {movie ?
                <Image className={styles.image} src={movie.image} alt={movie.name} width="1294px" height="500px" /> : ""
            }
        </div>
    );
}