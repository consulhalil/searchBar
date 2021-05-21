import React from 'react';
import PropTypes from 'prop-types';
import {Select, Label} from './style';

const DropDown = ({label, data}) => (
    <React.Fragment>
       <Label htmlFor={label}>
          {label}
       </Label>
       <Select name={label} id={label}>
          {data.length ?
              data.map((item, index) => (
                  // using 'index' for testing purpose
                  <option key={index}>
                     {item}
                  </option>
              )) : (
                  <option>
                     No data
                  </option>
              )}
       </Select>
    </React.Fragment>
);

DropDown.propTypes = {
   data: PropTypes.arrayOf(PropTypes.string),
};

export default DropDown;
