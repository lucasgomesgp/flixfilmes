import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { VscInfo } from "react-icons/vsc";
import { MovieContext } from "../hooks/useContext";
import styles from "../styles/BackgroundInitialItem.module.css";
import Modal from "./Modal";

export default function BackgroundInitialItem() {
    const { modalStatus, setModalStatus, movieHome, setMovieHome } = useContext(MovieContext);
    
    useEffect(() =>{

    },[]);

    return (
        <div className={styles.containerItem}>
            <div className={styles.buttons}>
                <h1>Stargirl</h1>
                <button className={styles.play}>
                    <FaPlay />
                    <span className={styles.text}>
                        Assistir
                    </span>
                </button>
                <button className={styles.infos}>
                    <VscInfo />
                    <span className={styles.text}>
                        Mais informações
                    </span>
                </button>
            </div>
            {/* {
                modalStatus ? <Modal id={movieId} /> : ""
            } */}
            <Image className={styles.image} src={"https://wallpaperaccess.com/full/2996058.jpg"} alt="Stargirl" width="1294px" height="500px" />
        </div>
    );
}