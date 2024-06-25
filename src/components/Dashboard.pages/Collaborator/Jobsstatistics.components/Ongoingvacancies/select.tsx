import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 90px;
`;

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function SelectOngoigVanacies() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel id="demo-select-small-label">Step</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Step - 1</MenuItem>
          <MenuItem value={10}>Step - 2</MenuItem>
          <MenuItem value={10}>Step - 3</MenuItem>
          <MenuItem value={10}>Step - 4</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
