import { Col, Container, Row } from "react-bootstrap"
import Product from "../components/ecomerce/product/Product"

const Products = () => {
  return (
      <Container>
      <Row>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
      </Row>
    </Container>
  )
}

export default Products
