import React, { useState,useEffect } from 'react'
import { useNavigate,useLocation, json } from 'react-router-dom'
const EditTable = ({tabledata}) => {
 
  const location=useLocation();
  const navigate=useNavigate();
  const {id, bookname,authername,publishedyear,price}=location.state.data
  const [updatename,setUpdateName]=useState(bookname)
  const [updateauther,setUpdateAuther]=useState(authername)
  const [updateyear,setUpdateYear]=useState(publishedyear)
  const [updateprice,setUpdatePrice]=useState(price)
  
 
  const onUpdateHandler=(e)=>{
    e.preventDefault();
  const obj= {
    id:id,
    bookname: updatename,
    authername: updateauther,
    publishedyear:updateyear,
    price: updateprice,
  }
  
  let updatedTable = tabledata.map((item) => (item.id === obj.id ? obj : item));
  localStorage.setItem("tabledata",JSON.stringify(updatedTable))
  setUpdateName('')
  setUpdateAuther('')
  setUpdateYear('')
  setUpdatePrice('')
  navigate('/form')
  location.state.data=obj

}


  return (
    <div className='container form-page '>
      <h1>Update value</h1>
      <form >
          <label>
            <b>BOOK NAME :</b>
          </label>
          <br />
          <input
            type='text'
            placeholder='Enter Book Name'
            className='form-input'
            id='bookname'
            autoComplete="off"
            value={updatename}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <br />
          <label>
            <b>AUTHER NAME :</b>
          </label>
          <br />
          <input
            type='text'
            id='authername'
            placeholder='Enter Auther Name'
            className='form-input'
            autoComplete="off"
            value={updateauther}
            onChange={(e) => setUpdateAuther(e.target.value)}
          />
          <br />
          <label>
            <b>PUBLISHED YEAR :</b>
          </label>
          <br />
          <input
            type='text'
            id='published year'
            placeholder='Enter Published year'
            className='form-input'
            autoComplete="off"
            value={updateyear}
            onChange={(e) => setUpdateYear(e.target.value)}
          />
          <br />
          <label>
            <b>PRICE :</b>
          </label>
          <br />
          <input
            type='text'
            id='price'
            placeholder='Enter price here'
            className='form-input'
            autoComplete="off"
            value={updateprice}
            onChange={(e) => setUpdatePrice(e.target.value)}
          />
        </form>
        <div className='btn-click'>
            <button  onClick={(e) => onUpdateHandler(e)}  className='btn btn-info' >
              Update
            </button>
          </div>
    </div>
  )
}

export default EditTable
