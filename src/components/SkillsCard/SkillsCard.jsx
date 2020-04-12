import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      border: '2px solid green',
      borderRadius: '15px',
      maxWidth: 345,
      marginLeft: '20rem'
    },
    media: {
      display: 'inline-block',
      height: '10rem',
      width: '10rem'
    },
    cardArea: {
        textAlign: 'center'
    },
    frontendSkills: {
        paddingTop: '1rem'
    },
    headings: {
        color: '#1f6b1f'
    },
    skills: {
      listStyleType: 'none',
      padding: '0',
      fontWeight: 'bold'
    }
  });

const SkillsCard = ({ imgURL,title,description,frontEndSkills }) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea className={classes.cardArea}>
          <CardMedia
            className={classes.media}
            image={imgURL}
            title={title}
          />
          <CardContent>
            <Typography className={classes.headings} gutterBottom variant="h5" component="h2">
              {title.split(' ')[0]}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
                {description}
            </Typography>
            <Typography className={`${classes.frontendSkills} ${classes.headings}`} 
            gutterBottom variant="h5" component="h2">
              Skills
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              <ul className={classes.skills}>
                {frontEndSkills.map( skill => (
                  <li>{skill}</li>
                ))}
              </ul> 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  export default SkillsCard;