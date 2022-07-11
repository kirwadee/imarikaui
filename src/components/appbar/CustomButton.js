import { Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Colors } from '../../styles/theme';

const CustomButton = ({icon, text, href}) => {
    const theme = useTheme();
  return (
    <Button
      component='a'
      color='primary'
      href={href}
      size='small'
      variant='text'
      sx={{
        color:theme.palette.text.primary,
        fontSize:theme.typography.subtitle1,
        fontWeight:'medium',
        textTransform:'uppercase',
        mr:2,
        '&:active':{
            color:Colors.primary
        },
        '&:hover':{
            color:Colors.primary
        },
        '& svg':{
            mr:0.5
        }
      }}
    >
        {icon} {text}
    </Button>
  )
}

export default CustomButton