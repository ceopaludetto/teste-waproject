import * as React from "react";

import { Input } from "../input";
import { Button } from "../button";

import s from "./index.module.scss";

export function Search({ onTypeChange, value, onChange }) {
  const [type, setType] = React.useState("default");

  function handleClick() {
    if (type === "default") {
      setType("removed");
    } else {
      setType("default");
    }
  }

  React.useEffect(() => {
    if (onTypeChange) {
      onTypeChange(type);
    }
  }, [type, onTypeChange]);

  return (
    <header className={s.container}>
      <h1>
        ListHub<span className={s.dot}>.</span>
      </h1>
      <div className={s.search}>
        <Input placeholder="Search" value={value} onChange={onChange} />
        <Button onClick={handleClick}>{type === "default" ? "See Removed" : "See Current"}</Button>
      </div>
    </header>
  );
}
