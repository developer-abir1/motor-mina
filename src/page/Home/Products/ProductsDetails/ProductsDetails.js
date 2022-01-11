import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { productsItem } from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faCoffee, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { Rating } from '@mui/material';



const ProductsDetails = () => {
    const { id } = useParams()

    const product = productsItem.find(pd => pd._id == id)
    console.log(product)

    // react hook from
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className='container'>

            <div className="row d-flex align-items-center " style={{ justifyContent: "space-between" }}>
                <div className="col-md-5">
                    <img style={{ width: "80%" }} src={product?.photo} alt="" />

                </div>
                <div className='col-md-6'>
                    <div className=" d-flex " style={{ justifyContent: "space-between" }}>

                        <div className="col-md-6 ">
                            <h5 style={{ color: 'gray' }}>Name: <b className='text-black'>{product?.name}</b> </h5>
                            <h5 className=' mt-5 mb-5' style={{ color: 'gray' }}>Price: <b className='text-black  '> ${product?.price}</b> </h5>


                            <button className='btn btn-danger  ' style={{ bottom: 0, }}> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
                        </div>
                        <div className="col-md-6">
                            <h2 className='col-sm-12'>Castomar  Reviwe</h2>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "2px" }}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <label htmlFor=""> <b>Description</b> </label>
                                <br />
                                <textarea style={{ width: "80% ", height: "100px", border: "none", borderRadius: "5px", border: '1px solid gray', margin: "10px" }} type="text" placeholder={`what's About you `} {...register("example")} />
                                <br />
                                <label htmlFor="" ><b> Rating</b> </label>
                                <br />
                                <Rating

                                    className="mt-3 mb-3"

                                />

                                <br />

                                <input type="submit" className='btn btn-success ' style={{ width: "40%", margin: "10px" }} />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eos culpa esse repudiandae quibusdam ut, voluptatibus, numquam corporis minus possimus similique laborum eveniet nostrum et delectus placeat aut fugiat! Eaque.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis libero beatae similique nostrum eum distinctio omnis, laborum ab. Ab aperiam fuga aut suscipit sit modi ex deleniti voluptas adipisci.
            </div>
            <div className=''>
                <hr style={{ color: "gray" }} />
                <p><b>Review </b></p>
            </div>
        </div>
    );
};

export default ProductsDetails;