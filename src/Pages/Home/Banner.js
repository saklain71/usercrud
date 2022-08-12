import React from 'react';

const Banner = () => {
    return (
        <div style={{
            background: `url(https://thumbs.dreamstime.com/b/shopping-cart-full-food-supermarket-aisle-elevated-view-high-internal-horizontal-composition-63616470.jpg)`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold ">Welcome to <br /> <span className='text-info'>EsHop House</span></h1>
                    <button class="btn btn-info">Let's Explore More ...</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;