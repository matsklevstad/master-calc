import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { v4 as uuidv4 } from "uuid";
 
const initialList = [
  {
    id: "a",
    name: "TDT4110",
  },
  {
    id: "b",
    name: "IT1901",
  },
];

function MyForm() {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event){
    setName(event.target.value);
  }

  function handleAdd(){
    const newList = list.concat( { name, id: uuidv4() });

    setList(newList);

    setName("");
  }

  const List = ( { list }) => (
    <ul>
        {initialList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
    </ul>
  );


  const AddItem = ( {name, onChange, onAdd}) => (
    <div>
      <input type="text" value={name} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add course
      </button>
    </div>
  );

  return (
    <div>
      <AddItem
      name = {name}
      onChange = {handleChange}
      onAdd = {handleAdd}
      />
      <List list = {list} />
    </div>
  );
};





ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
