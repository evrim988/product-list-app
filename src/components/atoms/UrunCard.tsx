import React from 'react'
import { IProduct } from '../../models/IProduct'

interface IUrunProps{
  urun: IProduct
}

function UrunCard(porps: IUrunProps) {

   const urun = porps.urun;

  return (
    <div className='col-4 mb-2'>
    <div className="card" >
        <div className="p-3">
            <img src={urun.thumbnail} className="card-img-top"  />
        </div>
        <div className="card-body">
            <h5 className="card-title">{urun.category}</h5>
            <p className="card-text">{urun.title}</p>
            <p className="card-text">{urun.price}</p>
        </div>
    </div>
</div>
  )
}

export default UrunCard