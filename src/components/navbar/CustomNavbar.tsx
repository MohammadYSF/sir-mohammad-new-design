import { Button, Container, Form, Nav, Navbar, NavDropdown, NavLink, Offcanvas } from "react-bootstrap";
import "../../assets/styles/styles.scss";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { NavbarSearchForm } from "./NavbarSearchForm";
interface propsType {
    expand: string
};

export const CustomNavbar = ({ expand }: propsType) => {
  
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <>
            <Navbar key={expand} bg="light" expand={expand} className="mb-3 px-5">

                <Navbar.Brand href="/">آقا محمد</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            آقا محمد
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/" className={`${splitLocation[1] == '' ? "active-nav-link" : ''}`}>خانه</Nav.Link>
                            <Nav.Link as={Link} to="/postsArchive" className={`${splitLocation[1] == 'postsArchive' ? "active-nav-link" : ''}`}>نوشته های من</Nav.Link>
                            <Nav.Link as={Link} to="/about" className={`${splitLocation[1] == 'about' ? "active-nav-link" : ''}`}>درباره من</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={`${splitLocation[1] == 'contact' ? "active-nav-link" : ''}`}>تماس با من</Nav.Link>
                            <Nav.Link as={Link} to="/login" className={`${splitLocation[1] == 'login' ? "active-nav-link" : ''}`}>لاگین</Nav.Link>

                        </Nav>
                     <NavbarSearchForm />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Navbar>
        </>
    );
}