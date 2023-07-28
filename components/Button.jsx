'use client';
import React from 'react';





const Button = ({ children, onClick }) => {
    const buttonStyles = {
       
        padding: '50px 1px 40px',
        fontSize: '40px',
        border: 'none',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #8B5CF6, #8B5CF6)',
        color: '#ffffff',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
      };
  
    const handleButtonClick = () => {
      // Custom logic when the button is clicked
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <button style={buttonStyles} onClick={handleButtonClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
  
  
  
  