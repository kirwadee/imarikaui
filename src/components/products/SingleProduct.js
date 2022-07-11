import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SingleProduct = ({product}) => {
  const theme = useTheme()

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  return (
    <React.Fragment>
      <Grid item 
            xs={12}
            md={3}
            data-aos='fade-up'
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          > 
          <Box
            display={'block'}
            width={1}
            height={1}
            sx={{
              transition:'all .2s ease-in-out',
              '&:hover':{
                transform:`translateY(-${theme.spacing(1/2)})`
              }
            }}
           >
         

      <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        title={product.title}
        subheader={new Date(product.createdAt).toDateString()} 
      />
      <CardMedia
        component="img"
        height="194"
        image={product?.image}
        alt={product?.title}
      />
      <CardContent> 
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{fontWeight:'bold'}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='body2'>
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


     </Box>
   </Grid>

    </React.Fragment>
  )
}

export default SingleProduct