import * as React from "react";

import s from "./index.module.scss";

export function UserGrid({ children }) {
  const len = React.Children.count(children);

  return <div className={s.list}>{!!len ? children : <div className={s["no-data"]}>No data found</div>}</div>;
}
