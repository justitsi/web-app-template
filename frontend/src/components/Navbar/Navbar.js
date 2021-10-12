import styles from './Navbar.module.scss';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link to={'/'}>
                        Homepage
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;