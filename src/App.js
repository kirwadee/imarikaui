import React, { useEffect } from 'react';
import { Container, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Banner from './components/banner';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/about';
import Products from './components/products';
import Footer from './components/foooter';
import { useTheme } from '@mui/material/styles';
import Sidebar from './components/appbar/Sidebar';
import theme from './styles/theme';
import Header from './components/appbar/Header';
import CarouselEvents from './components/peaceslider/CarouselEvents';


function App() {

  const theming = useTheme()
  const isLg = useMediaQuery(theming.breakpoints.up('lg'))

  const [openSidebar, setOpenSidebar] = React.useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
   };
   const handleSidebarClose = () => {
    setOpenSidebar(false);
};

const open = isLg ? false : openSidebar;


  AOS.init({
    duration: 2000
});

  useEffect(()=>{
     document.title="React Material UI v5"
  },[])


 

  return (
  <ThemeProvider theme={theme}>
  <Container
    maxWidth="xl"
    sx={{
      background:"#fff"
    }} 
  >

   <Header onSidebarOpen={handleSidebarOpen} />
   <Sidebar
      onClose={handleSidebarClose}
      open={open}
    />
   <CarouselEvents />
   <Banner />
   <About />
   <Products />
   <Footer />
  </Container>
  </ThemeProvider>  
  );
}

export default App;
