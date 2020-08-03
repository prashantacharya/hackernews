import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
