import React from 'react'


function UrunCard() {

   

  return (
    <div className='col-4'>
    <div className="card" >
        <div className="p-3">
            <img src="https://picsum.photos/50/50" className="card-img-top"  />
        </div>
        <div className="card-body">
            <h5 className="card-title">Bilgisayar</h5>
            <p className="card-text">Asus anakart i9</p>
            <p className="card-text">15.000 ₺</p>
        </div>
    </div>
</div>
  )
}

export default UrunCard