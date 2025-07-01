import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link to='/generate' className={styles.generate}>Generate Qr Code</Link>
			<Link to='/scan' className={styles.scan}>Scan Qr Code</Link>
			<Link to='/scan_history' className={styles.scan_history}>History scan</Link>
			<Link to='/generate_history' className={styles.generate_history}>History generate</Link>
		</nav>
	)
}