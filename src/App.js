import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import EditTable from './EditTable'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

//  let init = JSON.parse(localStorage.getItem("tabledata")) ?? []
let init
  if(localStorage.getItem("tabledata")===null){
 init=[]
  } else{
   init= JSON.parse(localStorage.getItem("tabledata"));
 
  }
  const onDelete = (todo) => {
let newdata=
      tabledata.filter((item) => {
        return item.id !== todo.id;
      })
    setTableData(newdata)
    localStorage.setItem("tabledata",JSON.stringify(tabledata))
  };
  const addbook = (bookname, authername,publishedyear, price) => {
    
    let bookform = {
      id:uuidv4(),
      bookname: bookname,
      authername: authername,
      publishedyear:publishedyear,
      price: price,
    };
    setTableData([...tabledata, bookform]);
  };
  const [tabledata, setTableData] = useState(init);

  useEffect(()=>{
    localStorage.setItem("tabledata",JSON.stringify(tabledata))
  },[tabledata])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/form' element={<Form addbook={addbook} setTableData={setTableData}/>} />
          <Route exact path='/edittable' element={<EditTable tabledata={tabledata} setTableData={setTableData} />} />
        </Routes>
          <Home tabledata={tabledata}  onDelete={onDelete} />
          
         {tabledata.length<=0?"": <Footer tabledata={tabledata} />}
      </BrowserRouter>
    </>
  );
};

export default App;
