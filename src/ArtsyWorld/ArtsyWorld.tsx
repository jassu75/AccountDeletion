import { CircularProgress, FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./artsyworld.module.css";
import useDeleteArtsyWorld from "./useDeleteArtsyWorld";
import DeleteConfirmDialog from "./DeleteConfirmDialog";

const ArtsyWorld = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [showEmailError, setShowEmailError] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false);
  const [emailErrorText, setEmailErrorText] = useState<string>("");
  const [passwordErrorText, setPasswordErrorText] = useState<string>("");
  const {
    authenticated,
    verifyUser,
    setAuthenticated,
    error,
    setError,
    loading,
  } = useDeleteArtsyWorld();

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError(false);
    setEmail(event.target.value.trim());
    setShowEmailError(true);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidInput = emailPattern.test(event.target.value.trim());
    setIsValidEmail(isValidInput);
    if (!isValidInput && showEmailError) {
      setEmailErrorText("Email is of invalid format");
    } else {
      setEmailErrorText("");
    }
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError(false);
    setPassword(event.target.value.trim());
    setShowPasswordError(true);
    const isValidInput = event.target.value.trim() !== "";
    setIsValidPassword(isValidInput);
    if (!isValidInput && showEmailError) {
      setPasswordErrorText("Password cannot be empty");
    } else {
      setPasswordErrorText("");
    }
  };

  const handleSubmit = () => {
    const loginData = {
      email: email,
      password: password,
    };

    verifyUser(loginData);
  };
  return (
    <Grid className={styles.artsyworld_container}>
      <FormControl className={styles.form_container}>
        <p className={styles.heading}>Artsy World Account Deletion</p>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => {
            handleEmailChange(e);
          }}
          variant="outlined"
          className={styles.input_field}
          error={showEmailError && !isValidEmail}
          helperText={emailErrorText}
          placeholder="Enter email"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          variant="outlined"
          className={styles.input_field}
          error={showPasswordError && !isValidPassword}
          helperText={passwordErrorText}
          placeholder="Enter Password"
        />
        {error ? (
          <p className={styles.error_text}>Email or Password is incorrect</p>
        ) : null}
        <button
          onClick={handleSubmit}
          className={
            isValidEmail && isValidPassword
              ? styles.active_submit_button
              : styles.inactive_submit_button
          }
          disabled={!(isValidEmail && isValidPassword)}
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : "Submit"}
        </button>
      </FormControl>
      {authenticated ? (
        <DeleteConfirmDialog
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          email={email}
        />
      ) : null}
    </Grid>
  );
};

export default ArtsyWorld;
