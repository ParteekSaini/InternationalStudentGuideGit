import App from './App';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import NovaScotiaCollegesData from './NovaScotiaCollegesData.json'
import CollapsiblePanel from './components/CollapsiblePanel';
import 'bootstrap/dist/css/bootstrap.css';
import provincelist from './provinces.json';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

function NovaScotia() {
  const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil earum illo ipsa velit facilis provident qui eligendi, quia ut magnam tenetur. Accusantium nisi quos delectus in necessitatibus ad. Ducimus, id!";
const [collapse, setCollapse] = useState(true);
const [title, setTitle] = useState("Expand All");
const [icon, setIcon] = useState("fa fa-chevron-right");
const collapseAll = () => {
  setCollapse(!collapse);
  setIcon(state => {
      return state === "fa fa-chevron-right"
          ? "fa fa-chevron-down"
          : "fa fa-chevron-right";
  });
  setTitle(state => {
      return state === "Expand All" ? "Collapse All" : "Expand All";
  });
};
return (
  <div className="App container my-2">
      {/* Expand/Collapse All */}
      <button
          type="button"
          className="btn-warning mt-4 mb-3 float-left"
          onClick={collapseAll}
      >
          <i className={icon} /> {title}
      </button>
      
      {NovaScotiaCollegesData.map((clg, index) => (
        <div key={index}>
            <CollapsiblePanel title={clg.cname} collapse={collapse}>
              {clg.courses.map((c, i) => (
                <div key={i}>
                  <CollapsiblePanel title={c.coursename} collapse={collapse}>
                    {c.coursedetails.map((cd, id) => (
                      <div key={id}>
                        {cd.programlength}
                        <br />
                        {cd.admission}
                        <br />
                        {cd.fees}
                        <br/>
                        {cd.credential}
                      </div>
                    ) )}
                  </CollapsiblePanel>
                </div>
              ))}
            </CollapsiblePanel>
        </div>
      ))}
  </div>
);
}


export default NovaScotia;