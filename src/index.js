/*
    Module: @mitchallen/react-number-input-field
    Author: Mitch Allen
*/

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const NumberInputField = ({ floatingLabelText = 'number', hintText='123', fieldStyle = {}, ...props }) => (
  <TextField  {...props}
   type='text' 
   pattern='[0-9]*'
   inputmode='numeric'
   autoCapitalize='off'
   autoComplete='off'
   hintStyle={ fieldStyle.hintStyle }
   hintText={ hintText }
   inputStyle={ fieldStyle.whiteStyle }
   floatingLabelStyle={ fieldStyle.hintStyle }
   floatingLabelFocusStyle={ fieldStyle.floatingLabelFocusStyle }
   floatingLabelText={ floatingLabelText }
   underlineStyle={ fieldStyle.underlineStyle }
 />
);


NumberInputField.propTypes = {
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
  fieldStyle: PropTypes.object
};

export default NumberInputField;