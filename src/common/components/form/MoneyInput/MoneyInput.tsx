import { styled } from '@mui/material/styles';
import { colors } from "../../../../styles/colors.ts";
import { TextField, InputAdornment, alpha } from "@mui/material";
import DollarIcon from "../../../../assets/DollarIcon.tsx";
import { useState, ChangeEvent } from "react";
import { formatNumber } from "../../../utils/money/moneyUtils.ts";
import { parseFormatInputString } from "./moneyInputUtils.ts";

interface InputProps {
  isEmpty?: boolean;
}

export const StyledInput = styled(TextField)<InputProps>`

    border-color: ${colors.stroke};

    .MuiInputBase-root {
        line-height: 1em;

        input {
            height: 1em;
        }
    }

    input {
        //font-family: Rubik;
        font-size: 24px;
        font-weight: 500;
        text-align: left;
        color: ${colors.purpleGray};

        padding: ${({ theme }) => theme.spacing(2, 2, 2, 1)};
    }

    .MuiOutlinedInput-root {
        padding-left: ${({ theme }) => theme.spacing(1)};

        fieldset {
            border: 1px solid ${colors.stroke};
        }

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

// I could use something like this: https://github.com/autoNumeric/autoNumeric for dealing with currency formatting and parsing,
// but probably I would kill the purpose to this challenge :-)
export const MoneyInput = ({ amount, onAmountChange, ...rest }: MoneyInputProps) => {
  const [inputValue, setInputValue] = useState(formatNumber(amount, ''));

  const [prevAmount, setPrevAmount] = useState(amount);
  if (amount !== prevAmount) {
    setPrevAmount(amount);
  }

  const isEmpty = !Boolean(amount) && amount !== 0;

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueStr = event.target.value;
    const resp = parseFormatInputString(valueStr);

    if(!resp) {
      return;
    }

    onAmountChange(resp.number);
    setInputValue(resp.formattedStr);

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
          lineHeight: '1em',
          '&.Mui-focused': {
            color: alpha('#000000', 0.2),
          }
        }
      }}
      label={isEmpty ? "0.00" : ""}

      value={inputValue}
      onChange={onValueChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><DollarIcon/></InputAdornment>,
      }}
      {...rest}
    />
  )
}
