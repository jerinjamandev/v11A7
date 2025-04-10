import React from 'react';

const Banner = () => {
    return (
        <div className='overflow-hidden'>
            <div style={{backgroundImage:"url('https://i.ibb.co.com/MkbNHdQM/Banner-min.jpg')"}} className='h-[540px] bg-fixed bg-cover flex flex-col item-start justify-center'>


            <div className='px-15'>

        <h1 className='text-white font-bold text-2xl'>Bid on Unique Items from <br /> Around the World</h1>
        <p className='text-[#FFFFFF] py-4 text-xs'>Discover rare collectibles, luxury goods, and vintage <br />
         treasures in our curated auctions</p>

         <button className='btn rounded-full'>Explore Auctions</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;