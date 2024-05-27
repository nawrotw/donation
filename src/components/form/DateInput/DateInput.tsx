import { styled } from '@mui/material/styles';
import { colors } from "../../../styles/colors.ts";
import { Button } from "@mui/material";
import LeftIcon from "../../../assets/LeftIcon.tsx";
import RightIcon from "../../../assets/RightIcon.tsx";
import { ButtonProps } from "@mui/material/Button/Button";
import { addMonths, format, isAfter } from "date-fns";
import { KeyboardEvent } from "react";

export const Root = styled('div')`
    border: 1px solid ${colors.stroke};
    border-radius: 4px;
    display: flex;
    align-items: center;

    height: 56px;

    padding: ${({ theme }) => theme.spacing(1.5)};

    :focus-visible {
        outline: none;
    }
    // TODO wkn design idea: probably good ideal would be to implement :hove, :active border/outline similar to money input
`;
export const DateContainer = styled('div')`
    text-align: center;
    flex: 1;
`;
export const Title = styled('div')`
    //font-family: Rubik; // TODO font-family
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
`;
export const Subtitle = styled('div')`
    //font-family: Work Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
`;
export const ArrowButton = styled((props: ButtonProps) => (
  <Button variant='text' color='secondary' {...props} />
))`
    min-width: 24px;
    padding: 0;
    border-radius: 5px;
`;

interface DateInputProps {
  date: Date;
  onDateChange: (date: Date) => void;
  id?: string;
  onlyFutureMonths?: boolean
}

export const DateInput = ({ date, onDateChange, onlyFutureMonths = true, ...rest }: DateInputProps) => {

  const canDecrementMonth = onlyFutureMonths ?
    isAfter(addMonths(date, -1), new Date()) :
    true;

  const incrementMonth = () => {
    onDateChange(addMonths(date, 1));
  }
  const decrementMonth = () => {
    if (!canDecrementMonth) return;
    onDateChange(addMonths(date, -1));
  }

  const keysActionMap: Record<string, () => void> = {
    'ArrowLeft': decrementMonth,
    'ArrowRight': incrementMonth,
    '+': incrementMonth,
    '-': decrementMonth,
  }

  const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    keysActionMap[event.key]?.();
  }

  return (
    <Root
      tabIndex={-1}
      onKeyUp={onKeyUp}
      {...rest}
    >
      <ArrowButton
        data-testid='prevMonth'
        onClick={decrementMonth}
        disabled={!canDecrementMonth}
      >
        <LeftIcon color={colors.midnightGray}/>
      </ArrowButton>

      <DateContainer>
        <Title>{format(date, 'MMMM')}</Title>
        <Subtitle>{format(date, 'yyyy')}</Subtitle>
      </DateContainer>

      <ArrowButton
        data-testid='nextMonth'
        onClick={incrementMonth}
      >
        <RightIcon color={colors.midnightGray}/>
      </ArrowButton>
    </Root>
  )
}
