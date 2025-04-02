import clsx from 'clsx';
import React from 'react';

const Button = ({ className, label, type = 'button', icon, onClick = () => {} }) => {
  return (
    <button 
      type={type} 
      onClick={onClick}  
      className={clsx('button-main px-3 py-2 outline-none rounded', className)}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
