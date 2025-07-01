import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constans"
import styles from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prev_data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    
        localStorage.setItem(
          GENERATE_DATA, 
          JSON.stringify([...prev_data, value])
        )
    setResult(value);
    setValue("");
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };
  return (
    <div className={styles.container}>
      {result !== "" && (
        <QRCodeSVG value={result} className={styles.qr_code} size={250} />
      )}
      <input
        type="text"
        value={value}
        placeholder="Write text"
        onChange={onChangeHandler}
        className="input"
      />
      <button
        type="button"
        onClick={onClickHandler}
        className={styles.btn_generate}
      >
        Generate Qr
      </button>
    </div>
  );
};
