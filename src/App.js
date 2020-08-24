import * as React from "react";

import { User, UserGrid, Container, Search, Footer, Loading } from "./components";
import { reducer, initialState, types } from "./providers/reducer";
import { api } from "./providers/api";

import s from "./App.module.scss";
import "./styles/global.scss";

export function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(false);

  // fetch data from github api
  React.useEffect(() => {
    // find 30 users per request and retrieve some another infos
    async function retrieveGithubUsers() {
      const res = await api.get("/users");
      const users = await Promise.all(
        res.data.map(async (user) => {
          const r = await api.get(`/users/${user.login}`);
          return r.data;
        })
      );

      return users;
    }

    retrieveGithubUsers().then((data) => {
      if (Array.isArray(data)) {
        dispatch({ type: types.SUCCESS, payload: { data } });
      } else {
        dispatch({ type: types.FAILURE, payload: { data } });
      }
    });
  }, []);

  function handleCurrentList(type) {
    setIsHidden(type === "removed");
  }

  function handleRemoveUser(index) {
    dispatch({ type: types.REMOVE, payload: { index } });
  }

  const filter = React.useCallback(
    (user) => {
      if (!searchValue) {
        return true;
      }

      // search user by login
      if (user.login.includes(searchValue)) {
        return true;
      }

      // strict search user by id
      if (String(user.id) === searchValue) {
        return true;
      }

      return false;
    },
    [searchValue]
  );

  return (
    <>
      {state.loading && (
        <div className={s.loading}>
          <Loading />
        </div>
      )}
      {!state.loading && state.failure && <div>{state.message}</div>}
      {!state.loading && state.success && (
        <Container>
          <Search
            onTypeChange={handleCurrentList}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <UserGrid>
            {state[isHidden ? "hidden" : "data"].filter(filter).map((user, i) => (
              <User key={user.id} index={i} data={user} removed={isHidden} onRemoveUser={handleRemoveUser} />
            ))}
          </UserGrid>
          <Footer />
        </Container>
      )}
    </>
  );
}
