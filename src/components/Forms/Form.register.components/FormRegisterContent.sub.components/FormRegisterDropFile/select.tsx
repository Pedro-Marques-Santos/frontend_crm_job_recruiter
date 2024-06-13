import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import styled from "styled-components";
import { namesOfJobs } from "./selectarray";
import { useFormContext, Controller } from "react-hook-form";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Container = styled.div`
  margin-top: 8px;
`;

interface IError {
  $stateError: boolean;
}

export const Error = styled.div<IError>`
  margin-top: 2px;
  font-size: 12px;
  color: ${({ $stateError }) => ($stateError ? "red" : "transparent")};
`;

export default function CheckboxesTags() {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <Container>
      <Controller
        name="SelectedJobs"
        control={control}
        defaultValue={[]} // Defina o valor padrão como uma array vazia
        rules={{
          validate: (value) =>
            (value?.length || 0) === 3 || "Please select 3 options",
        }}
        render={({ field }) => (
          <>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={namesOfJobs}
              getOptionLabel={(option) => option.title}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: "100%" }}
              onChange={(event, value) => field.onChange(value)}
              value={field.value || []} // Garanta que o valor seja sempre uma array
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors.SelectedJobs}
                  label="Select at least three work areas"
                  placeholder="Specialty"
                />
              )}
            />
            {
              <Error $stateError={errors.SelectedJobs ? true : false}>
                {errors.SelectedJobs
                  ? (errors.SelectedJobs.message as string)
                  : "ERROR"}
              </Error>
            }
          </>
        )}
      />
    </Container>
  );
}
