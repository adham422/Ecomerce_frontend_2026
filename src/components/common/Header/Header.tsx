import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import styles from "./style.module.css";
import HeaderBasket from '../../ecomerce/HeaderBaskets/HeaderBasket';

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
                    <Navbar.Brand href="/">ADHAM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Categories">Categories</Nav.Link>
                            <Nav.Link href="/product">Products</Nav.Link>
                            <Nav.Link href="/about-us">About us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="login">Log in</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    )
}

export default Header
