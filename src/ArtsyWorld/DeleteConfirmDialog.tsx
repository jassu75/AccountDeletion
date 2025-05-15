import { Grid, Modal } from "@mui/material";
import styles from "./deleteconfirmdialog.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteConfirmDialog = ({
  authenticated,
  setAuthenticated,
  email,
}: {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
}) => {
  const navigate = useNavigate();
  const handleDelete = async (email: string) => {
    try {
      const url =
        "https://tejas-artsymobileapp.wl.r.appspot.com/api/deleteaccount";
      const data = { email: email };

      await axios.post(url, data);
      navigate("/success");
    } catch (error) {
      console.log("Error deleting account", error);
      navigate("/error");
    }
  };

  const handleClose = () => {
    setAuthenticated(false);
  };

  return (
    <Modal open={authenticated} onClose={handleClose}>
      <Grid className={styles.dialog_container}>
        <p className={styles.heading}>
          Are you sure you want to delete the account?
        </p>
        <Grid className={styles.button_container}>
          <button
            className={styles.dialog_button}
            onClick={() => {
              handleDelete(email);
            }}
          >
            Yes
          </button>
          <button className={styles.dialog_button} onClick={handleClose}>
            Cancel
          </button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default DeleteConfirmDialog;
