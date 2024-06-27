import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { Container } from "./styles";

const StyledPopper = styled("div")({
  "& .MuiAutocomplete-listbox": {
    fontSize: 12,
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
  },
});

export default function Locales() {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Container>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        PaperComponent={StyledPopper}
        sx={{
          width: 140,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country/State"
            sx={{
              "& .MuiInputBase-input": { fontSize: 14 },
              "& .MuiFormLabel-root": { fontSize: 14 },
              "& .MuiAutocomplete-tag": { fontSize: 14 },
            }}
          />
        )}
      />
    </Container>
  );
}

const options = [
  "BR-AC",
  "BR-AL",
  "BR-AP",
  "BR-AM",
  "BR-BA",
  "BR-CE",
  "BR-DF",
  "BR-ES",
  "BR-GO",
  "BR-MA",
  "BR-MS",
  "BR-MG",
  "BR-PA",
  "BR-PB",
  "BR-PR",
  "BR-PE",
  "BR-PI",
  "BR-RJ",
  "BR-RN",
  "BR-RS",
  "BR-RO",
  "BR-SC",
  "BR-SP",
  "BR-SE",
  "BR-TO",
];
