// MultiSelect.js
import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const MultiSelect = ({ options, onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(options);

  const toggleOption = (option) => {
    if (selectedOptions.some((selected) => selected.value === option.value)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected.value !== option.value)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    onFilterChange(selectedOptions.map((option) => option.value));
  }, [selectedOptions, onFilterChange]);

  return (
    <>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={selectedOptions.some(
                  (selected) => selected.value === option.value
                )}
                onChange={() => toggleOption(option)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default MultiSelect;
