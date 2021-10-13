import React from "react";

const List = ({elements = [], onDeleteElement}) => {

  return (
    <div>
      <ul>
        {
         elements.map((element, index) => {
            return <li onClick={() => onDeleteElement(index)} key={index}>{element}</li>
         })
        }
      </ul>
    </div>
  )
};

export default List;