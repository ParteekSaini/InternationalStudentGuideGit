import App from './App';
import {ReactDOM} from 'react-dom'
import CollegeCard from './components/CollegeCard';
import universitieslist from "./universitieslist.json" 
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function college() {
  return (
    <Container>
        <Grid container>
          {universitieslist.map(uni =>(
            <Grid>
              <CollegeCard uni={uni}/> 
            </Grid>
          ))}
        </Grid>
    </Container>



  );
}

export default college;
