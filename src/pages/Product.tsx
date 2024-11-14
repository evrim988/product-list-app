import React from 'react'
import UrunArama from '../components/molecules/UrunArama'
import UrunListesi from '../components/organism/UrunListesi'


function Product() {
    return (
        <div className='container'>
            <div className="row mt-4">
                
                    <div className="row">
                        <UrunArama />
                    </div>

                    
                    <div className="row">
                        <UrunListesi />
                    </div>
             
            </div>
        </div>
    )
}

export default Product