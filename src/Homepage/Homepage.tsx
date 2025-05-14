import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSelect = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    const path = value.replace(/\s+/g, "");
    navigate(`/${path}`);
  };

  return (
    <Grid className={styles.homepage_container}>
      <FormControl className={styles.form_container}>
        <InputLabel id="dropdown_label">Select Option</InputLabel>
        <Select
          labelId="dropdown-label"
          value={value}
          label="Select App"
          onChange={handleSelect}
          className={styles.dropdown_menu}
        >
          <MenuItem value="Artsy World">Artsy World</MenuItem>
        </Select>
        <button onClick={handleSubmit} className={styles.submit_button}>
          Submit
        </button>
      </FormControl>
    </Grid>
  );
};

export default Homepage;
