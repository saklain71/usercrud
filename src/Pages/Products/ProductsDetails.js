import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const ProductsDetails = ({productss , children}) => {
    const {img,name, description, availableQuantity, price} = productss;
   // const navigate = useNavigate();
   const navigate = useNavigate();
   const updateButton =(id) =>{
    navigate(`/update/${id}`)
   }

   const deleteButton = (id) =>{

    fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            toast("Successfully deleted from DataBase")
        })
   } 
   

    return (
       <div className='card w-96 bg-base-100 shadow-xl'>
         <div className='card-body '>
            <img src={img} alt='' className='h-38 w-full'/>
            <p><b> {name} </b></p> 
            <p> {description}</p>
            <p><b>availableQuantity:</b> {availableQuantity}</p>
            <p><b>price:</b> {price}</p>
            <div className='grid grid-cols-2 gap-10'>
                <button onClick={() => deleteButton(productss._id)} className='btn'>Delete</button>
                <button onClick={()=> updateButton(productss._id)} className='btn'>Update</button>
            </div>
        </div>
       </div>
    );
};

export default ProductsDetails;