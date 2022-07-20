import { Box, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../features/events/eventSlice';

const CarouselContainer = styled(Box)(({theme})=>({
    height:"40px",
    backgroundColor:"white",
    marginBottom:"20px",
    padding:"20px",
    [theme.breakpoints.down('md')]:{
        marginBottom:"180px",
        
    }
}))


function CarouselEvents(props) {

    const dispatch = useDispatch()
    const {evs} = useSelector(state => state.upcomingevents)



    useEffect(()=>{
        dispatch(getEvents())
    },[dispatch])

    return (
        <CarouselContainer>
        <Carousel style={{height:"100%"}}>
            {evs.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
        </CarouselContainer>
    );
}

export default CarouselEvents

const Item = ({title, timelines}) => {
    return (
        <Box
         sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100%"

         }}
        >
           <Typography
             sx={{
                fontFamily:'"Montez", "cursive"',
                fontSize:"20px",
                fontWeight:"bold",
                marginRight:"10px"
             }}
            >
                {title}
            </Typography>
            <Typography
             sx={{
                fontFamily:'"Montez", "cursive"',
                fontSize:"20px",
                fontWeight:"bold"
             }}
            >
                {timelines}
            </Typography>

        </Box>
    );
};