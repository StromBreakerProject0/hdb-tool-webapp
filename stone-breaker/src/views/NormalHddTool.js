import React from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import Header from '../components/Header'
import '../styles/Product/Product.css'

const NormalHddTool = () => {
  const addToCart=()=>{
    // call add to cart api
  }
  return (
      <Card className='product_card'>
        <Row className='d-flex flex-column'>
          <Col className='product_name'>
            <p>Product Name</p>
          </Col>
          <Col className='product_image'>
          <img src='#' alt='ProductImg'/>
          </Col>
          <Col className='product_details'>
          <p>Product Other Details</p>
          </Col>
          <Button onClick={addToCart}>Add To Cart</Button>
        </Row>
      </Card>
  )
}

export default NormalHddTool