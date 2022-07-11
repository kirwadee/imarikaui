import React from 'react'
import { Box, Divider, Grid, Icon, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { Colors } from '../../styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery'
import AddTaskIcon from '@mui/icons-material/AddTask';


const About = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
  return (
    <div id='about'>
        <Box
           maxWidth={{sm:720, md:1236}}
           paddingX={2}
           paddingY={{xs:4, sm:6, md:8, }}
           margin='0 auto'
        >
            <Box>
                <Box marginBottom={4}>
                    <Typography
                     variant='h3'
                     align='center'
                     fontWeight={700}
                     marginTop={theme.spacing(1)}
                    //   data-aos={matches ? 'fade-up' : 'fade-up'}
                     gutterBottom
                     fontSize={matches ? '30px' : '40px'}
                    >
                        About Us
                    </Typography>
                    <Typography
                      variant='h6'
                      color={Colors.secondary}
                      align="center"
                      data-aos ='fade-up'
                      marginTop={4}
                      marginBottom={6}
                    >
                        This initiative is geared towards supporting children, youth and women affected by
                         banditry, early marriages, FGM and climate change by reaching out and influencing
                          their lives in the community. We felt that the society needs an organization that will focus on issues related to livelihood and hence we decided to form this organization. The event will also be geared towards supporting the community
                    </Typography>
                </Box>
                <Typography
                     variant='h3'
                     align='center'
                     fontWeight={700}
                     marginTop={theme.spacing(1)}
                    //   data-aos={matches ? 'fade-up' : 'fade-up'}
                     gutterBottom
                     fontSize={matches ? '30px' : '40px'}
                    >
                        Our Mission
                    </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} data-aos={matches ? 'fade-left' : 'fade-up'}>
                        <ListItem 
                          component='div'
                          disableGutters
                          sx={{
                            alignItems:"flex-start",
                            padding:0
                          }}
                        >
                            <ListItemAvatar>
                                <Box color={Colors.primary}>
                                    <Icon sx={{fontSize:'40px'}}>
                                     < AddTaskIcon />
                                    </Icon>
                                </Box>
                            </ListItemAvatar>
                            <ListItemText
                               primary="Alliance Building"
                               secondary="We seek to establish connections and partnerships as a basis of facilitating an 
                               integrated systems approach towards enhancing positive rites of passage in the community,
                                psychological empowerment and education."

                               primaryTypographyProps={{
                                variant:'h4',
                                gutterBottom:true,
                                sx:{fontWeight:700}
                               }}
                               secondaryTypographyProps={{
                                variant: 'subtitle1',
                                gutterBottom: true,
                            }}
                            sx={{
                                margin: 0,
                            }}
                             />
                        </ListItem>
                    </Grid> 
                    <Grid item xs={12} sm={6} md={4}  data-aos={matches ? 'fade-left' : 'fade-up'}>
                        <ListItem 
                          component='div'
                          disableGutters
                          sx={{
                            alignItems:"flex-start",
                            padding:0
                          }}
                        >
                            <ListItemAvatar>
                                <Box color={Colors.primary}>
                                    <Icon sx={{fontSize:'40px'}}>
                                     < AddTaskIcon />
                                    </Icon>
                                </Box>
                            </ListItemAvatar>
                            <ListItemText
                               primary="Knowledge Sharing"
                               secondary="We seek to enhance the knowledge base around positive rites of passage in the community, mental health, socio-cultural issues and psychological well-being. This will be realized by investing in community outreach, workshops, and panel and advocacy campaigns."

                               primaryTypographyProps={{
                                variant:'h4',
                                gutterBottom:true,
                                sx:{fontWeight:700}
                               }}
                               secondaryTypographyProps={{
                                variant: 'subtitle1',
                                gutterBottom: true,
                            }}
                            sx={{
                                margin: 0,
                            }}
                             />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}  data-aos={matches ? 'fade-left' : 'fade-up'}>
                        <ListItem 
                          component='div'
                          disableGutters
                          sx={{
                            alignItems:"flex-start",
                            padding:0
                          }}
                        >
                            <ListItemAvatar>
                                <Box color={Colors.primary}>
                                    <Icon sx={{fontSize:'40px'}}>
                                     < AddTaskIcon />
                                    </Icon>
                                </Box>
                            </ListItemAvatar>
                            <ListItemText
                               primary="Promote personal, cultural and social diversity "
                               secondary="We seek to improve social relationships especially among genders and 
                               to enrich the culture of interaction/learning by cultivating collaboration, 
                               respect and compassion among members of our community"

                               primaryTypographyProps={{
                                variant:'h4',
                                gutterBottom:true,
                                sx:{fontWeight:700}
                               }}
                               secondaryTypographyProps={{
                                variant: 'subtitle1',
                                gutterBottom: true,
                            }}
                            sx={{
                                margin: 0,
                            }}
                             />
                        </ListItem>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Divider />
    </div>
  )
}

export default About