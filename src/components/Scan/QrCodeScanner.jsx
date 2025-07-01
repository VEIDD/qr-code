import { Scanner } from "@yudiel/react-qr-scanner";
import styles from "./QrCodeScanner.module.css";
import { useState } from "react";
import { SCAN_DATA } from "../../constans";
export const QrCodeScanner = () => {
  const [text, setText] = useState("");

  const scanHandler = (result) => {
    setText(result[0].rawValue)

		const prev_data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		localStorage.setItem(
			SCAN_DATA, 
			JSON.stringify([...prev_data, result[0].rawValue])
		)

  };

  return (
    <div className={styles.container}>
      <Scanner
        onScan={scanHandler}
        styles={{
          container: { width: 350, position: "relative", height: 400 },
        }}
        components={{ audio: false }}
      />
      <div className={styles.p}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
