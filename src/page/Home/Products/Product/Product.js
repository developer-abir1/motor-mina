import { Rating } from '@mui/material';
import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = ({ pd }) => {
    const { name, photo, price, rating, _id } = pd
    return (

        <div className="col-md-6 col-xl-4   d-flex justify-content-center">
            <Link to={`/products/${_id}`} style={{ textDecoration: "none", color: 'black' }}>
                <div class="card" style={{ width: '18rem', margin: "10px" }}>
                    <img src={photo} class="card-img-top" alt={name} />
                    <div className='d-flex justify-content-center'>
                        <h4>{name}</h4>
                    </div>
                    <div class="card-body">

                        <div className=' d-flex justify-content-between '>
                            <div className="col-md-6">

                                <span style={{ fontWeight: 700, fontSize: "20px" }}>${price}</span>
                            </div>
                            <div className="col-md-6">
                                <Rating
                                    name="simple-controlled"
                                    readOnly
                                    value={rating}

                                />

                            </div>

                        </div>



                    </div>

                </div>
            </Link>
        </div>

    );
};

export default Product;