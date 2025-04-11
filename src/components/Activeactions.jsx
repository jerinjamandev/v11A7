import React from 'react';
import { useState } from 'react';
import { Heart } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';


const Activeactions = ({datas,setitems,setAmount}) => {

  const [click,setclick]=useState([])

  const handleadd=(data,id)=>{
    setclick((predata)=>[...predata,id])
    setitems((predata)=>[...predata,data])
    const price=parseFloat(data.currentBidPrice.replace(/,/g, ''))
    setAmount(preeprice=>preeprice+price)
    toast.success("Item Add Your Favorite List")

  }


    return (
        <div>


    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>

      {datas.map(data=>(
          <tr>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={data.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{data.title}</div>
              </div>
            </div>
          </td>
          <td>
            
          ${data.currentBidPrice}
            
          </td>
          <td>{data.timeLeft}</td>
          <th>
            <button className={`${click.includes(data.id) && 'cursor-no-drop'}`} disabled={click.includes(data.id)} onClick={()=>handleadd(data,data.id)}><Heart size={24} color={click.includes(data.id)?"red":"gray"} fill={click.includes(data.id)?"red":"none"}/></button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
    );
};

export default Activeactions;