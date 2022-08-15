import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';


const Update = () => {
    const { id } = useParams();
    const [products, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [products, id]);

    const updateButton = (id, e) => {
        // e.preventDefault();
        const img = e.target.img.value;
        const name = e.target.name.value;
        const description = e.target.description.value;
        const availableQuantity = e.target.availableQuantity.value;
        const price = e.target.price.value;
        const email = e.target.price.value;

        e.target.reset();
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    img: img,
                    name: name,
                    description: description,
                    availableQuantity: availableQuantity,
                    price: price,
                    email: email
                }
            ),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                toast('Product successfully updated');
            })
    }

    return (
        <div>
            <p className='text-center text-xl'><b>Update here</b> </p>
            <div className='flex w-fit xs:block'>
                <div className='card-body '>
                    <img src={products.img} alt='' className='' />
                    {/* <p><b> {name} </b></p>
                <p> {description}</p>
                <p><b>availableQuantity:</b> {availableQuantity}</p>
                <p><b>price:</b> {price}</p>
                <p><b>Email:</b> {email}</p> */}
                </div>
                <div>
                    <form onSubmit={() => updateButton()}>
                        <p><input className='mb-2' type="text" placeholder='img url' name="img" /> <button className='btn btn-info'  >update</button> </p>
                        <p><input className='mb-2' type="text" placeholder='name' name="name" /> <button className='btn btn-info'  >update</button> </p>
                        <p><input className='mb-2' type="text" placeholder='description' name="description" /> <button className='btn btn-info'  >update</button> </p>
                        <p><input className='mb-2' type="number" placeholder='availableQuantity' name="availableQuantity" /> <button className='btn btn-info'  >update</button> </p>
                        <p><input className='mb-2' type="number" placeholder='price' name="price" /> <button className='btn btn-info'  >update</button> </p>
                        <p><input className='mb-2' type="text" placeholder='email' name="email" /> <button className='btn btn-info'  >update</button> </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;