import React from 'react';
import bick from "../../../image/bmw-bike.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faCoffee, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return (

        <div className="container "  >
            <div className="row d-flex align-items-center ">
                <div className="col-md-6">
                    <h1 style={{ fontSize: "60px", fontWeight: 800, fontFamily: "sans-serif", marginBottom: "10px" }}>World most <br /> powerful bike</h1>
                    <p style={{ color: 'gray', marginTop: "30px" }}>Aliquam lorem ante, dapibus in, viverra quis, feugiat hellus rra null aut metus varius laoreet srtrum. Imperdiet e uricies vel augue dapibus in, viverra quis srtrum aenean.</p>
                    <div className='  d-flex justify-content-between '>
                        <div className="col-md-6 d-flex ">
                            <div style={{ marginRight: "20px" }}>
                                <FontAwesomeIcon icon={faBicycle} className='fs-1 ' />
                            </div>

                            <div>
                                <h5>Engine Power
                                </h5>
                                <p>205hp (151 kW)</p>

                            </div>

                        </div>
                        <div className="col-md-6 d-flex  ">
                            <div style={{ marginRight: "20px" }}>
                                <FontAwesomeIcon icon={faCog} className='fs-1  ' />
                            </div>
                            <div>
                                <h5>  Engine type</h5>

                                <p>4-Stroke Cylinder</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-danger rounded-pill  mt-5 p-3 text-uppercase '> <FontAwesomeIcon icon={faShoppingCart} /> Buy NOW</button>
                </div>
                <div className="col-md-6">
                    <img src={bick} style={{ width: "100%" }} alt="" />
                </div>
            </div>
        </div >


    );
};

export default About;