import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className='flex align-center justify-center bg-base-100 m-5 mb-12'>
            <div className='card w-11/12 lg:w-1/4 shadow-xl'>
                <div className='card-body bg-gradient-to-r from-yellow-100 to-fuchsia-200'>
                    <h2 className="text-center text-xl mx:text-2xl lg:text-3xl font-bold text-blue-700">Sign Up</h2>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className='form-control w-full max-w-ms'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input type="email" placeholder='Your Email' id='email'
                            className="input input-bordered w-full max-w-xs"
                            { ...register("email", {
                                required:{
                                    value: true,
                                    message: "Valid Email is required"
                                },
                                pattern:{
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                }
                            })
                            } />

                            <label className="label">
                                {errors.email?.type === 'required' && 
                                <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>} */}

                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input type="password" placeholder='Your Password'
                            className='input input-bordered w-full max-w-ms'
                            { ...register("password", {
                                required:{
                                    value: true,
                                    message: "Valid Password is required"
                                },
                                minLength:{
                                        value: 6,
                                        message: 'Provide a valid Password'
                                }
                            })
                            } />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {/* {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>} */}
                                {errors.password?.type === 'minLength' && <span>{errors.password.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>

                            <input
                                type="password" placeholder="Confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmPassword", {
                                    required:{
                                        value: true,
                                        message: 'Confirm Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be six characters or longer'
                                    }
                                })} />

                            <label className="label">
                            {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        
                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;