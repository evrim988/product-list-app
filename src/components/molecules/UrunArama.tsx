import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ProductDispatch } from '../../store';
import { fetchFindllProducts } from '../../store/feature/productSlice';

function UrunArama() {

    const dispatch = useDispatch<ProductDispatch>(); 
    const [searchTerm, setSearchTerm] = useState('');

    

    return (
        <div className='col p-3 rounded-3' style={{ boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.66)' }}>
            <label className='form-label'>Ürün Arama</label>
            <div className="row">
                <div className="col-10">
                    <input type="text" onChange={evt => {
                        setSearchTerm(evt.target.value)
                        dispatch(fetchFindllProducts(searchTerm))
                    }} className='form-control' />
                </div>
                <div className="col-2 d-grid">
                    <input type="button" onClick={() => {dispatch(fetchFindllProducts(searchTerm))}} value="Ara" className='btn btn-warning' />
                </div>
            </div>
        </div>
    )
}

export default UrunArama