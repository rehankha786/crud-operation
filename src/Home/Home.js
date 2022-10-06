import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = ({tabledata,onDelete}) => {
  const editItems = () => {
  }
  return (
    <div className='container table-head'>
       <table className="table">
      { tabledata.length <=0 ? <p className="table-heading"><b>No data found</b></p>: <thead >
          <tr>
          <th>BOOK NAME</th>
          <th>AUTHER NAME</th> 
          <th>PUBLISHED YEAR</th>
          <th>PRICE PKR</th>
          <th>DELETE</th>
          <th>EDIT</th>
          </tr>
        </thead>}
      { tabledata.map((data) => {
        return(
          <>
          <tbody>
            <tr>
      <td>{data.bookname}</td>
      <td>{data.authername}</td>
      <td>{data.publishedyear}</td>
        <td>{data.price}</td> 
         
      <td> <div
       className='btn btn-danger'
       onClick={() => {
         onDelete(data);
       }}
     >
       delete
     </div></td>
    <td> <Link to='/edittable'  state={{ data }} className="link" >
      <div className="btn btn-success" onClick={() =>{ editItems (data)}}>Edit</div>
      </Link></td>
      </tr>
        </tbody>
        
     </>
       ) })}
       </table>
    </div>
  
  );
};

export default Home;
