import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Header from '../components/Header'
import '../styles/Product/Product.css'

const NormalHddTool = () => {
  return (
    <div>
      <Card>
        <Row className='landing-page-tab d-flex flex-column'>
          <Col className='product_name'>
            <p>Product Name</p>
          </Col>
          <Col className='product_image'>
          <img src='#' alt='ProductImg'/>
          </Col>
          <Col className='product_details'>
          <p>Product Other Details</p>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default NormalHddTool