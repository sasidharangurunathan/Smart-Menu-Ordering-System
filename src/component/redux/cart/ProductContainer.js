import React, { Component } from 'react';
import ItemCart from './Item';
import data1 from './data1';





const ProductContainer = () => {
    console.log("datatata",data1.productData)
    console.warn(data1.productData)
  return (
    
        <div>
        <br/><br/>
            <h1 className='text-center mt-3'>Table Booking</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                {data1.productData.map((item, index) => {
                    return(
                        <ItemCart 
                            img={item.img}
                            title={item.title}
                            desc={item.desc} 
                            price={item.price} 
                            status={item.table_status}
                            item={item} 
                            key={index} 

                            

                        />
                    )
                })}
                    
                </div>
            </section>
        </div>
  
)
}

export default ProductContainer