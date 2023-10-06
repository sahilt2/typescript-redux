import { Button, ButtonProps, styled } from "@mui/material";

const customButtonStyled = styled(Button)<ButtonProps>(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    '&:hover':{
        backgroundColor:"pink"
    }
}))

export default customButtonStyled;