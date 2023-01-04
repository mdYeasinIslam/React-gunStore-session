import React, { useState } from 'react';
import { fakeDb, removeData } from '../../utilities/fakeDb';
import Modal from '../Modal/Modal';

const SingleGun = ({ gun, countIncrease }) => {
    const [modalData, setModalData] = useState({})
    const { id, name, bullet, img, action, price } = gun;
    const addInLocal = (id) => {
        fakeDb(id)
    }
const removeDbFromLocal=(id)=>{
    removeData(id)
}

    return (
        <div>
            <div className="card w-full h-4/5 bg-orange-300 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-full  " />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='flex items-end gap-4'>
                        <h2 className="card-title">{name}</h2>
                        <span className="bg-red-500 rounded-2xl px-3">{action}</span>
                    </div>
                    <div className='font-semibold'>
                        <p>Bullet : {bullet}</p>
                        <h4>Price: {price}</h4>

                    </div>
                    <div className="card-actions ">
                        <button onClick={() => (
                            countIncrease(),
                            addInLocal(id)
                        )} className="btn btn-primary">Added Item</button>
                        <button onClick={()=>removeDbFromLocal(id)} className='btn btn-primary'>Remove Item</button>
                        {/* <button className="btn ">Details</button> */}
                        <label htmlFor="my-modal-3" className="btn btn-secondary " onClick={() => setModalData(gun)} >open modal</label>
                        {
                            modalData &&
                            <Modal modalData={modalData} setModalData={setModalData}></Modal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;