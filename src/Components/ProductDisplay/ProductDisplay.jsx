import React from 'react'

const ProductDisplay = (props)=> {
    const {Product} = props;
  return (
    <div>
        <div>
            <div>
                <img src={Product.image} alt=''/>
                <img src={Product.image} alt=''/>
                <img src={Product.image} alt=''/>
                <img src={Product.image} alt=''/>
                
               

            </div>
            <div>
                <img src= {Product.image} alt="" />
            </div>

        </div>

        <div>
            <h1>{Product.name}</h1>
            <div>
                <img src='./imgs/star.jpg' alt=''/>
                <img src='./imgs/star.jpg' alt=''/>
                <img src='./imgs/star.jpg' alt=''/>
                <img src='./imgs/star.jpg' alt=''/>
                <img src='./imgs/star dull.jpg' alt=''/>
                
                
                </div> 
        </div>

    </div>
  )
}

export default ProductDisplay