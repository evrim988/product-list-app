import React, { useEffect, useState } from 'react'
import UrunCard from '../atoms/UrunCard'
import { ProductDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchGetAllProducts } from '../../store/feature/productSlice';



function UrunListesi() {

    const productList = useAppSelector(gState => gState.product.productList);
   // const productList = useAppSelector(gState => gState.product.productAllList);
    
    const dispatch = useDispatch<ProductDispatch>();

    useEffect(() => {
        dispatch(fetchGetAllProducts());
    }, []);


    return (
        <div className='col p-3 rounded-3 mt-4' style={{ boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.66)' }}>
            <div className="row">
                
                {
                    productList.map((urun,index) => {
                        return <UrunCard key={index} urun={urun} />
                    })
                }

            </div>
        </div>
    )
}

export default UrunListesi