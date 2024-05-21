import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Container } from "./styles";
import { useState } from "react";

export function SelectLanguage() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container>
      <h3>Select language</h3>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Português Brasil</MenuItem>
          <MenuItem value={20}>Espanhol</MenuItem>
          <MenuItem value={30}>English</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
