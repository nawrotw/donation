import { styled } from "@mui/material/styles";
import Logo from "../assets/Logo.tsx";

const Root = styled('div')`
    background-color: white;
    height: 80px;
    padding: ${({theme}) => theme.spacing(3,5)};
    color: ${({theme}) => theme.palette.primary.main};
`
export const Header = () => {
  return (
    <Root><Logo/></Root>
  )
}
