import { styled } from '@mui/material/styles';
import { colors } from "../../styles/colors.ts";
import { TextField, InputAdornment, alpha } from "@mui/material";
import DollarIcon from "../../assets/DollarIcon.tsx";
import { useState, ChangeEvent, FocusEvent } from "react";

interface InputProps {
  isEmpty?: boolean;
}

export const StyledInput = styled(TextField)<InputProps>`

    border-color: ${colors.stroke};

    input {
        //font-family: Rubik;
        font-size: 24px;
        font-weight: 500;
        text-align: left;
        color: ${colors.purpleGray};
    }

    .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border: 1px solid ${colors.midnightPurple};
        }
    }
`;

interface MoneyInputProps {
  amount: number | undefined;
  onAmountChange: (amount: number) => void;
  id?: string;
  autoFocus?: boolean;
  className?: string;
}

export const MoneyInput = ({ amount, onAmountChange, ...rest }: MoneyInputProps) => {
  const [text, setText] = useState(amount ? "" + amount : "0");

  const isEmpty = !Boolean(amount) && amount !== 0;

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    console.log('focus', event)
  }
  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    console.log('blur', event)
  }
  return (
    <StyledInput
      InputLabelProps={{
        shrink: false,
        variant: 'outlined',
        sx: {
          fontSize: 24,
          ml: 4,
          color: alpha('#000000', 0.2),
        }
      }}
      label={isEmpty ? "0.00" : ""}

      value={text}
      onChange={onValueChange}
      onFocus={onFocus}
      onBlur={onBlur}
      InputProps={{
        startAdornment: <InputAdornment position="start"><DollarIcon/></InputAdornment>,
      }}
      {...rest}
    />
  )
}
