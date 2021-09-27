import React from 'react';
import propTypes from 'prop-types';

function Select (props) {
  const { text, name, options, onChange, dataTestId, selected } = props;

  return (
    <label htmlFor={ name }>
      { text }
      <select
        name={ name }
        id={ name }
        onChange={ onChange }
        data-testid={ dataTestId }
        defaultValue={ selected }
      >
        {options.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  text: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  dataTestId: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onChange: propTypes.func.isRequired,
  selected: propTypes.string,
};

Select.defaultProps = {
  selected: '',
};

export default Select;
