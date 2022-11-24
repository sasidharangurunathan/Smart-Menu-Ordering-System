import React from "react";
import twomember from "../../../image/2MemberTable.webp";
import fourmember from "../../../image/4MemberTable.jpg";
import sixmember from "../../../image/6MemberTable.jpg";



const Item = (props) => {
 
  console.log("propswsss",props.item)
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
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
          {props.status === "active" && (
            <button className="btn btn-success" >
        
EditTable      </button>
        )}
          
        </div>
      </div>
    </div>
  );
};
export default Item;
