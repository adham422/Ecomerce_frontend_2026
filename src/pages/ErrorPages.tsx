import { Alert, Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const ErrorPages = () => {
  return (
     <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Alert variant="danger" className="text-center">
            <Alert.Heading>Oh snap! You're lost.</Alert.Heading>
            <p>
              The page you are looking for does not exist.
            </p>
            <hr />
            <div className="d-flex justify-content-center">
              {/* Link from react router dom for navigation to make true */}
              <Button variant="outline-danger" as={Link} to="/" replace={true}>
                Go Home
              </Button>
            </div>
          </Alert>
        </Col> 
      </Row>
    </Container>
  )
}

export default ErrorPages
