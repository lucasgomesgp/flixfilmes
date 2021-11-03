import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { VscInfo } from "react-icons/vsc";
import styles from "../styles/BackgroundInitialItem.module.css";

export default function BackgroundInitialItem() {
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
            <Image className={styles.image} src={"https://wallpaperaccess.com/full/2996058.jpg"} alt="Stargirl" width="1294px" height="500px" />
        </div>
    );
}