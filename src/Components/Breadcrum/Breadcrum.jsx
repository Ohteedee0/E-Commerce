import React from 'react'

export default function Breadcrum(props) {
    const {Product} = props;
  return (
    <div>
        HOME <img src="./imgs/arrow right(1).png" alt=""/>SHOP  <img src="./imgs/arrow right(1).png" alt=""/>{Product.category} <img src="./imgs/arrow right(1).png" alt=""/>{Product.name} </div>
  )
}
