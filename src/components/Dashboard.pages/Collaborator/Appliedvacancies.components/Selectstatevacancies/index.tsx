import { Container } from "./styles";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function Selectstatevacancies() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, minWidth: "100%" }} size="small">
        <InputLabel id="demo-select-small-label">Status</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>active</MenuItem>
          <MenuItem value={20}>inactive</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
