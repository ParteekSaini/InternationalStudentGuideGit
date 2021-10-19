import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from './App';
import CollapsiblePanel from './components/CollapsiblePanel';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';


function BritishColumbia() {
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
          <CollapsiblePanel title="Title 1" collapse={collapse}>
              <span>{text}</span>
          </CollapsiblePanel>
          <CollapsiblePanel title="Title 2" collapse={collapse}>
              <span>{text}</span>
          </CollapsiblePanel>
          <CollapsiblePanel title="Title 3" collapse={collapse}>
              <span>{text}</span>
          </CollapsiblePanel>
          <CollapsiblePanel title="Title 4" collapse={collapse}>
              <span>{text}</span>
          </CollapsiblePanel>
          <CollapsiblePanel title="Title 5" collapse={collapse}>
              <span>{text}</span>
          </CollapsiblePanel>
      </div>
  );
}


export default BritishColumbia;