import { Paper, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../features/events/eventSlice';

const CarouselContainer = styled(Carousel)(({theme})=>({
    
}))


function CarouselEvents(props) {

    const dispatch = useDispatch()
    const {evs} = useSelector(state => state.upcomingevents)



    useEffect(()=>{
        dispatch(getEvents())
    },[])

    return (
        <Carousel>
            {evs.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}

export default CarouselEvents

const Item = ({title, timelines}) => {
    return (
        <Paper
         sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"20px"
         }}
        >
           <Typography
             sx={{
                fontFamily:'"Montez", "cursive"',
                fontSize:"25px",
                fontWeight:"bold",
                marginRight:"10px"
             }}
            >
                {title}
            </Typography>
            <Typography
             sx={{
                fontFamily:'"Montez", "cursive"',
                fontSize:"25px",
                fontWeight:"bold"
             }}
            >
                {timelines}
            </Typography>

        </Paper>
    );
};