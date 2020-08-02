import React from 'react';

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

export default Button;
