import React from 'react'
import NormalHddTool from './NormalHddTool'
import '../styles/Product/Product.css'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className='content__box d-flex justify-content-around mt-2'>
        <Link to="/normal-tool" className="cursor-pointer">
            <NormalHddTool/>
        </Link>
        <NormalHddTool/>
        <NormalHddTool/>
    </div>
  )
}

export default Content