import { Grid } from "@mui/material";
import styles from "./errorDeletion.module.css";
import { useNavigate } from "react-router-dom";

const ErrorDeletion = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <Grid className={styles.container}>
      <p className={styles.heading}>SuccessFully Deleted Account</p>
      <button className={styles.redirect_button} onClick={handleRedirect}>
        Return to homepage
      </button>
    </Grid>
  );
};

export default ErrorDeletion;
