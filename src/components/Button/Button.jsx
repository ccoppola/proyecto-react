import React from "react";
import styles from "./button.module.css";

export default function Button(props) {

  let styleButton = {
    padding: props.padding,
  };

  return (
    <button onClick={props.onClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  );
}
