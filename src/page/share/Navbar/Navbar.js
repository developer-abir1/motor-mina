import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../image/logo.png"

const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top  " style={{ background: "white" }}>
                <div className="container ">
                    <Link to="/">
                        <img style={{ width: "150px" }} src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto  ">
                            <li className="nav-item ms-3">
                                <a className="nav-link fs-5 active" aria-current="page"  >Home</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link fs-5 "  >Product</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link fs-5 "  >Dashbard</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link fs-5"  >Admin</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link  "  ><button className='btn btn-danger fs-6 text-uppercase rounded-pill'>Logout</button></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
