import { Link } from "react-router-dom";
import Backgroud from "../components/UI/Background";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Backgroud>
      <div className={classes.container}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The Page you are looking for doesn't exist or an other error occured.
          Go to <Link to="/home">Home Page</Link>.
        </p>
      </div>
    </Backgroud>
  );
};

export default NotFound;
