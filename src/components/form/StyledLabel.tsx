import { styled } from '@mui/material/styles';
import { colors } from "../../styles/colors.ts";

export const StyledLabel = styled('label')`
    //font-family: Work Sans;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.midnightGray};
    margin-bottom: ${({theme}) => theme.spacing(1)};
`
