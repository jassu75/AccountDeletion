import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const Homepage = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="dropdown_label">Select Option</InputLabel>
      <Select
        labelId="dropdown-label"
        value={value}
        label="Select Option"
        onChange={handleChange}
      >
        <MenuItem value="Artsy World">Artsy World</MenuItem>
      </Select>{" "}
    </FormControl>
  );
};

export default Homepage;
