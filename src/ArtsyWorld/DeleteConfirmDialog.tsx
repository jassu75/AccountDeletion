import { Grid, Modal } from "@mui/material";
import styles from "./deleteconfirmdialog.module.css";

const DeleteConfirmDialog = ({
  authenticated,
  setAuthenticated,
}: {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal open={authenticated} onClose={() => setAuthenticated(false)}>
      <Grid className={styles.dialog_container}>
        <p>Are you sure you want to delete the account?</p>
        <Grid className={styles.button_container}>
          <button className={styles.dialog_button}>Yes</button>
          <button className={styles.dialog_button}>Cancel</button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default DeleteConfirmDialog;
