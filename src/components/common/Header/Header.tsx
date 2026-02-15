import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import styles from "./style.module.css";
import HeaderBasket from '../../ecomerce/HeaderBaskets/HeaderBasket';
import { NavLink } from 'react-router-dom';

const {headerContainer , headerLogo} = styles;
const Header = () => {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>
                        E <Badge>Com</Badge>
                    </span>
                </h1>
                <HeaderBasket />
            </div>

            <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>


                <Container>
                    {/* <Navbar.Brand as={NavLink} to="/">ADHAM</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/Categories">Categories</Nav.Link>
                            <Nav.Link as={NavLink} to="/products/men">Products</Nav.Link>
                            <Nav.Link as={NavLink} to="/about-us">About us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="login">Log in</Nav.Link>
                            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    )
}

export default Header
