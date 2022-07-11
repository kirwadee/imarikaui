import { Box, Slide } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { getEvents } from '../../features/events/eventSlice'
import { MessageText, PeaceSliderContainer } from '../../styles/peaceslider'
import { useSelector, useDispatch } from 'react-redux';

const peacemessages = [
    "Peace starts with you",
    "Promote Peace Because:",
    "It ensures prosperity",
    "in all life's dimensions"
]

const PeaceSlider = () => {

   const containerRef = useRef()

    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true)
    

    const dispatch = useDispatch()
    const {evs} = useSelector(state => state.upcomingevents)
    console.log(evs)


   const messages =  evs.map(ev => {
    return ev.timelines
  })

  

  useEffect(()=>{
    dispatch(getEvents())
  },[dispatch])

  

    useEffect(()=>{
     
        setTimeout(()=>{
            setShow(false)
        },3000)

        const intervalId = setInterval(()=>{
            setMessageIndex(i => (i + 1) % messages.length)

            setShow(true)

            setTimeout(()=>{
                setShow(false)
            },3000)
    
        }, 4000);

      

        return ()=>{
            clearInterval(intervalId)
        }

       
        
    },[])

  return (
    <PeaceSliderContainer ref={containerRef}>
      <Slide 
        container={containerRef.current}
        direction={show ? 'left' : 'right'}
        in={show}
        timeout={{
            enter:600,
            exit:200
        }}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <MessageText>
                {messages[messageIndex]}
            </MessageText>
        </Box>
      </Slide>
    </PeaceSliderContainer>
  )
}

export default PeaceSlider