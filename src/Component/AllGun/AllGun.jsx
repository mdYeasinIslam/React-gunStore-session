 
import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {
    const [allGun, setGun] = useState([])
   
    const datas = async () => {
        const res = await fetch("data.json")
        const data = await res.json()
        setGun(data)
    }
    useEffect(() => {
       
        datas()
    }, [])
    return (
        <div className=''>
         <div className='my-4 text-center '>
            <h1 className='text-2xl font-semibold'>Welcome to GUN-store!!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto debitis tenetur beatae consequatur placeat necessitatibus dolores quos natus iste.</p>
         </div>
        <div className='w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-2 shadow-2xl '>
            {
                allGun.map(gun => <SingleGun key={gun.id} countIncrease={countIncrease} gun={gun}></SingleGun>)
            }
           
        </div>
        </div>
    );
};

export default AllGun;