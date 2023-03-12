import React from 'react'
import Header from '../components/Header'
import NormalHddTool from './NormalHddTool'
import '../styles/Product/productlist.css'

const NormalHddToolList = (props) => {
  return (
    <div className='product_list__page'>
      <Header />
      <div className='product_list'>
        <div className='product_item'>
        <NormalHddTool />
        </div>
        <div className='product_item'>
        <NormalHddTool />
        </div>
        <div className='product_item'>
        <NormalHddTool />
        </div>
      </div>
    </div>
  )
}

export default NormalHddToolList