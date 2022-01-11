import React from 'react';
import photo1 from "../../../image/photo1.jpg"
import photo2 from "../../../image/photo2.jpg"
import photo3 from "../../../image/photo3.jpg"

const Header = () => {


    return (

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={photo2} style={{ width: "100%", height: "500px" }} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={photo1} style={{ width: "100%", height: "500px" }} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={photo3} style={{ width: "100%", height: "500px" }} class="d-block w-100" alt="..." />
                </div>
            </div>

        </div>

    );
};

export default Header;