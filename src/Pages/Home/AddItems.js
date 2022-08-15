import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddItems = () => {
    const [items, setItems] = useState();
    //  const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/products/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])

    // from react hook form
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const total = { ...data, delivery: 0 };
        console.log(total);
        e.target.reset();

        const url = 'http://localhost:5000/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(total),

        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                toast("successfully added a new item");

            })
    };
    return (


        <div className='flex align-center justify-center bg-base-100 m-5'>
            <div className="card w-full lg:w-1/3 shadow-xl">
                <div className="card-body bg-gradient-to-r from-yellow-100 to-fuchsia-200">
                    <h1 className='text-info text-center mb-8'>Add New Item</h1>
                    <form className=' Aform-control  max-w-xs' onSubmit={handleSubmit(onSubmit)}>
                        {/* <input className='mb-2 p-2' placeholder='Name' name='email' value={user?.email}  type="text" {...register("email")}/> */}
                        <input className='input input-bordered w-full max-w-xs"' placeholder='item: name' type="text" {...register("name", { required: true })} />
                        <input className='input input-bordered w-full max-w-xs' placeholder=' description' type="text" {...register("description", { required: true })} />
                        <input className='input input-bordered w-full max-w-xs' placeholder=' price' type="number" {...register("price")} />
                        <input className='input input-bordered w-full max-w-xs' placeholder=' availableQuantity' type="number" {...register("price")} />
                        <input className='input input-bordered w-full max-w-xs' placeholder='Email' type="text" {...register("email", { required: true })} />
                        <input className='input input-bordered w-full max-w-xs' placeholder='photo url' type="text" {...register("img", { required: true })} />
                        <input className='btn btn-info w-full max-w-xs mt-8 ' type="submit" value="Add Items" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddItems;