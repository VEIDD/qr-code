import { SCAN_DATA } from "../../constans"
import { QRCodeSVG } from "qrcode.react";
import styles from './HistoryScan.module.css'
export const HistoryScan = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

	return (
		<div className={styles.container}>
			<ul>
				{data.map(() => {

				})}
				
			{data.map((text) => 
				<p key={text}>
					{text}
				<QRCodeSVG value={text} size={100} key={text} />
				</p>
			)}
			</ul>
		</div>
	)
}