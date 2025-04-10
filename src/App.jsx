import React from 'react';
import Activeactions from './components/Activeactions';
import Banner from './components/Banner';
import FavItem from './components/FavItem';
import Navbar from './components/navbar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

    const [datas,setdatas]=useState([])
    useEffect(()=>{
        axios.get('data.json')
        .then(data=>setdatas(data.data))
    },[])
    return (
        <div>
            

          
          
          
    <Navbar></Navbar>
    <Banner></Banner>



    <div className='px-15 py-30 bg-[#EBF0F5]'>
        <h2 className='text-2xl font-bold'>Active Auctions</h2>
        <h3>Discover and bid on extraordinary items</h3>


        <div className='flex item-start justify-around gap-6 py-15'>
            <div className='bg-white w-[70%]'>
            <Activeactions datas={datas}></Activeactions>
             </div>



            <div className='bg-white w-[30%]'>
            <FavItem></FavItem>
            </div>

        </div>


        </div>
        </div>
    );
};

export default App;