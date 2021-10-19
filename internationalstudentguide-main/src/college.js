import App from './App';
import {ReactDOM} from 'react-dom'
import provincelist from "./provinces.json"
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ProvinceCard from './components/ProvinceCard';

function college() {
  return (
    <Container>
        <Grid container>
          {provincelist.map(pro =>(
            <Grid>
              <ProvinceCard pro={pro}/> 
            </Grid>
          ))}
        </Grid>
    </Container>
  );
}

export default college;
