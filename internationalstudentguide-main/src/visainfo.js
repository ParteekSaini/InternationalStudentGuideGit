import App from './App';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CollapsiblePanel from './components/CollapsiblePanel';
import 'bootstrap/dist/css/bootstrap.css';
import VisainfoData from './VisainfoData.json';

//adding to git again
function VisaInfo() {
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
     <div lassName="App container my-2">
       <img alt="process" src="/assests/process.png" />
       <button
              type="button"
              className="btn-warning mt-4 mb-3 float-left"
              onClick={collapseAll}
          >
              <i className={icon} /> {title}
          </button>
          
          {VisainfoData.map((doc, index) => (
            <div key={index}>
                <CollapsiblePanel title={doc.title} collapse={collapse}>
                  {doc.documentFirst.map((d1, i) => (
                    <div key={i}>
                      <CollapsiblePanel title={d1.documentName} collapse={collapse}>
                        {d1.documentDetails.map((de, id) => (
                          <div key={id}>
                            {de.details1}
                            <br />
                            {de.details2}
                            <br />
                            {de.details3}
                            <br/>
                            {de.details4}
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
export default VisaInfo;