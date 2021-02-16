import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HoomeScreen = () => {
	return (
		<Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</Fragment>
	)
}

export default HoomeScreen