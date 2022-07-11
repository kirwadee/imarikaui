import { Divider, Drawer, List, ListItemButton, ListItemText, styled } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context';
import { DrawerCloseButton } from '../../styles/appbar';
import CloseIcon from '@mui/icons-material/Close';

const MiddleDivider = styled((props)=>(
    <Divider variant='middle' {...props} />
))``;

const AppDrawer = () => {

    const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color:"black"
            }}
          />
        </DrawerCloseButton>
      )}

    <Drawer open={drawerOpen}>
     
        <List>
            <ListItemButton>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Projects</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Gallery</ListItemText>
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
                <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
            <MiddleDivider />
        </List>
    </Drawer>
    </>
  )
}

export default AppDrawer