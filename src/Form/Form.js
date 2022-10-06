import { useState, useEffect } from "react";
import "./Form.css"
const Form = ({ addbook, setTableData }) => {
  const [bookname, setBookName] = useState("");
  const [authername, setAutherName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");


  useEffect(()=>{
    const table = JSON.parse(localStorage.getItem("tabledata"));
    setTableData(table)
  },[]) 

  const submit = (e) => {
    e.preventDefault(); 
    if (!bookname || !authername || !year || !price) {
      alert("please fill all the fields");
    } else {
      addbook(bookname, authername, year, price); 
      setBookName('')
      setAutherName('')
      setYear('')
      setPrice('')
    }
   
  };
  return (
    <>
      <div className='container form-page'>
        <h1 className='form-heading'>
          <b>Fill the form</b>
        </h1>
        <form onSubmit={submit}>
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
            value={bookname}
            onChange={(e) => setBookName(e.target.value)}
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
            value={authername}
            onChange={(e) => setAutherName(e.target.value)}
          />
          <br />
          <label>
            <b>PUBLISHED YEAR :</b>
          </label>
          <br />
          <input
          type='text'
            placeholder='Enter Published year'
            className='form-input'
            autoComplete="off"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <br />
          <label>
            <b>PRICE PKR :</b>
          </label>
          <br />
          <input
          type='text'
          
            placeholder='Enter price here'
            className='form-input'
            autoComplete="off"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className='btn-click'>
            <button id='click-btn'>
              submit
            </button>
          </div>
        </form>
      </div>
     
    </>
  );
};

export default Form;
