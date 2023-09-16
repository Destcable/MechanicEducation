import React from 'react';
import Select from 'react-select';

const customStyles = {
  dropdownIndicator: (provided) => ({
    ...provided,
    transform: 'rotate(180deg)',
  }),
};

const Dropdown = ({ label, options, onChange, placeholder }) => {
  return (
    <div className="dropdown-container">
      <Select
        options={options}
        isSearchable={false}
        styles={customStyles}
        className="custom-dropdown"
        classNamePrefix="custom-dropdown"
        onChange={onChange}
        menuPlacement="top"
        placeholder={placeholder}
      />
      <label>
        {label}
    </label>
    </div>
  );
};

export default Dropdown;
