import * as React from "react";

import s from "./index.module.scss";

export function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
