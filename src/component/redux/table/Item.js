import React from "react";
import twomember from "../../../image/2MemberTable.webp";
import fourmember from "../../../image/4MemberTable.jpg";
import sixmember from "../../../image/6MemberTable.jpg";
import { useDispatch } from "react-redux";



const Item = (props) => {
 
  console.log("propswsss",props)
  function change(props){ 
    console.log("propswsss",props) 
    fetch('http://localhost:8081/deleteTable', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(props)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Deleted Success")
        window.location.reload(false)
      })
    })
  

  }
  const dispatch = useDispatch();
  return (
    <div className="col-5 col-md-8 col-lg-4 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
      
         
          {props.title === "2MemberSheet" && (
          <img src={twomember} className="card-img-top img-fluid" />
        )}
          {props.title === "4MemberSheet" && (
          <img src={fourmember} className="card-img-top img-fluid" />
        )}
          {props.title === "6MemberSheet" && (
          <img src={sixmember} className="card-img-top img-fluid" />
        )}
      
       
        
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.status}</p>
         
            

            

            <button className="btn btn-danger" onClick={()=>dispatch(change({table_id:props.table_id}))}  >DelectTable</button>
        
          
        </div>
      </div>
    </div>
  );
};
export default Item;
