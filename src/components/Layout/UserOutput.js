import { Fragment } from "react";

const UserOutput = (props) => {
  return (
    <Fragment>
      {props.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </Fragment>
  );
};
export default UserOutput;
