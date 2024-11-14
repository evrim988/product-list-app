import React, { useEffect, useState } from 'react'
import UrunCard from '../atoms/UrunCard'



function UrunListesi() {
    
    return (
        <div className='col p-3 rounded-3 mt-4' style={{ boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.66)' }}>
            <div className="row">
                <UrunCard />
            </div>
        </div>
    )
}

export default UrunListesi