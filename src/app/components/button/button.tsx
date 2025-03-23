import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Define the props for the OutlinedButton component
interface OutlinedButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning';
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: "rgb(3,133,122)",
  color: "rgb(3,133,122)",
  textTransform:"none",
  '&:hover': {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
    backgroundColor: 'transparent',
  },
}));

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ label, onClick, disabled = false, fullWidth = false, color }) => {
  return (
    <StyledButton
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
    >
      {label}
    </StyledButton>
  );
};

export default OutlinedButton;
