import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UserOutput from "./components/Users/UserOutput";

function App() {
  const [userOutput, setUserOutput] = useState([]);

  const addUserHandler = (userName) => {
    setUserOutput(() => {
      return [{ name: userName, id: Math.random().toString() }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserOutput users={userOutput} />
    </Fragment>
  );
}

export default App;
