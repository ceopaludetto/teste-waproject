import * as React from "react";

import s from "./index.module.scss";

export function Input(props) {
  return <input className={s.input} {...props} autoFocus />;
}
