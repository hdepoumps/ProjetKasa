import  '../../style/Collapse.css'
import fleche from "../../img/fleche.svg";
import React, { useState } from "react";

function Collapse(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card_collapse">
      <div className={"collapse_title"} onClick={handleCollapse}>
        <p>{props.title}</p>
        <img
          src={fleche}
          alt={"flèche"}
          className={isExpanded ? "rotate-arrow" : ""}
        />
      </div>
      {isExpanded && (
        <div className={"collapse_description"}>
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
