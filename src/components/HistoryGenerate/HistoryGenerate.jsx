import { GENERATE_DATA } from "../../constans";
import { QRCodeSVG } from "qrcode.react";
import styles from "./HistoryGenerate.module.css";

export const HistoryGenerate = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  return (
    <div className={styles.container}>
      <ul>
        {data.map(() => {})}
				
        {data.map((text) => (
          <p key={text}>
            {text}
            <QRCodeSVG value={text} size={100} key={text} />
          </p>
        ))}
      </ul>
    </div>
  );
};
