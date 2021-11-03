import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShieldUserFill, RiArrowDownSFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import styles from "../styles/Menu.module.css";

export default function Menu() {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.area_links}>
                    <Link href="/" passHref>
                        <h1>Flixfilmes</h1>
                    </Link>
                    <ul className={styles.ul_items}>
                        <li>
                            <Link href="/">
                            Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/series">
                            Séries
                            </Link>
                        </li>
                        <li>
                            <Link href="/filmes">
                            Filmes
                            </Link>
                        </li>
                        <li>
                            <Link href="/bombando">
                            Bombando
                            </Link>
                        </li>
                        <li>
                            <Link href="/minhalista">
                            Minha lista
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <AiOutlineSearch size={28} color={"white"} />
                    <IoMdNotifications size={28} color={"white"} />
                    <div className="user_area">
                        <RiShieldUserFill size={28} color={"white"} />
                        <RiArrowDownSFill size={28} color={"white"} />
                    </div>
                </div>
            </div>
        </>
    );
}