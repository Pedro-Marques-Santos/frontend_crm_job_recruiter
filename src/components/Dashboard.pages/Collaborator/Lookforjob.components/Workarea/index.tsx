import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { namesOfJobs } from "@/components/Forms/Form.register.components/FormRegisterContent.sub.components/FormRegisterDropFile/selectarray";
import { Container } from "./styles";

const icon = <CheckBoxOutlineBlankIcon style={{ fontSize: "15px" }} />;
const checkedIcon = <CheckBoxIcon style={{ fontSize: "15px" }} />;

export function Workarea() {
  const [selectedJobs, setSelectedJobs] = React.useState([]);

  const handleChange = (event: any, value: any) => {
    setSelectedJobs(value);
    console.log(value);
  };

  return (
    <Container>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={namesOfJobs}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
        renderOption={(props, option, { selected }) => {
          const index = namesOfJobs.indexOf(option);
          return (
            <li {...props} key={index} style={{ fontSize: "14px" }}>
              <Checkbox
                key={index}
                icon={icon}
                checkedIcon={checkedIcon}
                checked={selected}
              />
              {option}
            </li>
          );
        }}
        style={{ width: "100%" }}
        onChange={handleChange}
        value={selectedJobs}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Work areas"
            placeholder="Specialty"
            sx={{
              "& .MuiInputBase-input": { fontSize: 14 },
              "& .MuiFormLabel-root": { fontSize: 14 },
              "& .MuiAutocomplete-tag": { fontSize: 14 },
              "& .MuiChip-label": { fontSize: 12 },
            }}
          />
        )}
      />
    </Container>
  );
}
