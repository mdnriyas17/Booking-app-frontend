import { Card ,CardContent,Typography,CardActions,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Movieitems = ({title,releasedate,posterurl,id}) => {
  return (
    <Card 
    sx={{ 
        width:250,
        height:400,
        borderRadius:5, 
        margin:1, 
        ":hover":{
        boxShadow:"10px 10px 20px #ccc"
    }, }}>
    
      <img height={'50%'} width={'100%'} src={posterurl}  alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {new Date(releasedate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} to={`/booking/${id}`} sx={{margin:'auto'}} size="medium">BookNow</Button>
      </CardActions>
    </Card>
  )
}

export default Movieitems;