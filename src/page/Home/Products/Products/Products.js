import React from 'react';
import photo from "../../../../image/bike-9.png"
import phot02 from "../../../../image/bike-7.png"
import Product from '../Product/Product';

export const productsItem = [
    {
        _id: 5,
        name: "TVS Motor Bick 100CC",
        photo: photo,
        price: 998,
        rating: 4
    },

    {
        _id: 57,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 35,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 254,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 154,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {

        _id: 249,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 2,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 3574,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 35489,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 4
    },
    {
        _id: 45645,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 2
    },
    {
        _id: 6745,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 3
    },
    {
        _id: 3544777,
        name: " Apache 150cc",
        photo: photo,
        price: 660,
        rating: 3
    },
    {
        _id: 35425,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 2
    },
    {
        _id: 786556463,
        name: " Apache 150cc",
        photo: phot02,
        price: 660,
        rating: 3
    },
    {
        _id: 784563563,
        name: " Apache 150cc",
        photo: photo,
        price: 660,
        rating: 3
    },


]

const Products = () => {
    return (
        <div className="container">
            <h1 style={{ fontWeight: 700 }} className='mt-5 mb-5'> Bast Collaction </h1>
            <div className='row '>
                {
                    productsItem.slice(0, 12).map((pd, index) => <Product key={index} pd={pd}></Product>)
                }
            </div>
            <div className='d-flex justify-content-center mt-3 mb-3 '>
                <button className='btn btn-danger rounded-pill'>More Product </button>
            </div>
        </div>
    );
};

export default Products;