import * as React from "react";
import clsx from "clsx";

import s from "./index.module.scss";

export function Button({ children, size = "default", variant = "contained", ...props }) {
  return (
    <button className={clsx(s.button, s[variant], size === "small" && s.small)} {...props}>
      {children}
    </button>
  );
}
