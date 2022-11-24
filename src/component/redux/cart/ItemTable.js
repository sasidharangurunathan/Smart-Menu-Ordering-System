import React from "react";



const ItemTable = (props) => {
 
  console.log("propswsss",props.item)
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
      
          <img src="" className="card-img-top img-fluid" />
       
        
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">₹ {props.price}</p>
          <button class="btn btn-success">
        
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemTable;
