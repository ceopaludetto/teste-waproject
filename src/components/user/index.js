import * as React from "react";
import { FiUsers } from "react-icons/fi";

import { Button } from "../button";

import s from "./index.module.scss";

export function User({ data, index, removed, onRemoveUser }) {
  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <img src={data.avatar_url} alt={data.login} />
      </div>
      <div className={s.info}>
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          {data.login}
        </a>
        <div className={s.interactions}>
          <FiUsers className={s.icon} />
          {data.followers} followers · {data.following} following
        </div>
        <div className={s.ids}>
          <span className={s.id}>
            User ID
            <br />
            <span>{data.id}</span>
          </span>
          <span className={s.id}>
            Node ID
            <br />
            <span>{data.node_id}</span>
          </span>
        </div>
        {!removed && (
          <div className={s.actions}>
            <Button variant="flat" size="small" onClick={() => onRemoveUser(index)}>
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
