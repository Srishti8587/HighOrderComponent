import React from "react";
import EnhanceElement from "./HOC";

const Todos = ({ data }) => {
  let renderTodo = data.slice(0,10).map(p=>{
       return (
        <div key={p.id}>
             <h2>{p.title}</h2>
        </div>
       );
  });

  return (
    <>
      <div>
        <h4>{renderTodo}</h4>
      </div>
    </>
  );
};

export default EnhanceElement(Todos,"todos");
