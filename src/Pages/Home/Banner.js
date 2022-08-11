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
                    <h1 class="mb-5 text-5xl font-bold ">Welcome to <br /> <span className='text-info'>Nalam Accessories</span></h1>
                    <p class="mb-5">We provide a best quality pc accessories and all prosucts are manufactured in our own house by experienced hands.</p>
                    <button class="btn btn-info">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;