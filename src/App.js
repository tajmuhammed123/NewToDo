import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  const handleAddToDo = () => {
    if (toDo.trim() === "" || toDos.some((item) => item.text === toDo.trim())) {
      return;
    }
    setToDos([...toDos, { id:Date.now(), date:Date(), text:toDo, status:false }]);
    setToDo("");
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={handleAddToDo} ></i>
      </div>
      <div className="todos">
        {
          toDos.map((value,index)=>{
            return(
              <div className="todo" key={index}>
                <div className="left">
                  
                  <input onChange={(e)=>{
                    setToDos(toDos.filter((obj)=>{
                      console.log(obj.id, value.id);
                      if(obj.id===value.id){
                        value.status=e.target.checked
                      }
                      return obj
                    }))
                  }} type="checkbox" name="" id="" />
                  <p style={{ textDecoration: value.status ? 'line-through' : 'none' }}>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={()=>{setToDos(toDos.filter((obj)=>
                    obj.id !==value.id
                    ))}}></i>
                </div>
              </div>
            )
          })
        }
        <div style={{textAlign:'center', paddingTop:'40px'}}>
          <h1>Completed Tasks:</h1><br />
          {
            toDos.map((obj)=>{
              if(obj.status){
                const formattedDate = new Date().toLocaleDateString('en-GB');
                return(<h3 >{obj.text} &nbsp;&nbsp;&nbsp;&nbsp;  Date: {formattedDate}</h3>)
              }
              return null
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;