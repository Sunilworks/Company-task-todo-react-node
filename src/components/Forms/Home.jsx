import "../../App.css"
import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import TodoInput from '../TodoInput';
import Todolist from '../TodoList';

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  useEffect(() => {
      if(token){
        axios.get("https://handson-4.onrender.com",{headers:{
          "authorization":`Bearer ${token}`}})
          .then(res => console.log(res.data))
      }
      else{
        navigate("/login")
      }
    },[token,navigate])

    const handleClick = () =>{
      localStorage.removeItem('token');
      navigate('/login')
    }

    const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

    return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    <button className="logout" onClick={handleClick}>Logout</button>
    </div>
    
  )
}

export default Home