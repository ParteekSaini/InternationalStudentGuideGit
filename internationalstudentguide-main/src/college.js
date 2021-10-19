import App from './App';
import './App.css';
import {ReactDOM} from 'react-dom'
import provincelist from "./provinces.json"
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function college() {
  return (
    <div class="college_div">
    <Container>
      
        <Grid container>
          {provincelist.map(pro =>(
            <div class="college_list">
              <div className ="provinceImage">
                <a href={pro.linkpage}><img src={`${pro.image}`} alt={pro.province}/></a>
                <a href={pro.linkpage} >{pro.province}</a>
              </div>
              <br /> <br /> <br />
            </div>
          ))}
        </Grid>
        
    </Container>
    </div>
  );
}

export default college;
