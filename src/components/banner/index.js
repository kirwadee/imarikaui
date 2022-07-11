import { Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';
import BannerButtons from './BannerButtons';

const Banner = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <React.Fragment>
    <BannerContainer>
        <BannerImage src="/images/banner/IMG-20220628-WA0019.jpg"    data-aos={matches ? "fade-down" : "fade-right"}/>
        <BannerContent  data-aos ={matches ? 'fade-up' : 'fade-left' } >
            <Typography
             variant='h2'
             fontSize={'14px'}
             fontWeight={700}
             align="center"
             marginBottom={1}
             color={theme.palette.text.primary}
             >
                MAKE A POSITIVE IMPACT
            </Typography>
            <BannerTitle variant='h2' align='center' color={theme.palette.primary.main}>
                Your Support is Powerful
            </BannerTitle>
            <BannerDescription variant='h6' component='p' align='justify' color={theme.palette.text.secondary}>
            Do a good deed by giving to those in need.
            </BannerDescription>
            <BannerButtons />
        </BannerContent>
    </BannerContainer>
     <Divider sx={{mt:3}} />
    </React.Fragment>
  )
}

export default Banner