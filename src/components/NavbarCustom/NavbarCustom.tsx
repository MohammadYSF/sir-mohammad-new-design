import React from "react";
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import classes from './styles.module.css';
import './styles.css';
import NavbarSearchForm from "./NavbarSearchForm";

type props = {
    expand: string | boolean | undefined
}
const NavbarCustom: React.FC<props> = (props): JSX.Element => {
    return (
        <>
            <Navbar bg="transparent" expand={false} className="mb-3">
                <Container fluid dir={'ltr'}>
                    <Navbar.Brand href="#"><img src="http://sirmohammad.ir/SirMohammad_WithoutBackground300x100.png"
                                                alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${props.expand}`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${props.expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${props.expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${props.expand}`}>
                                منو
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3" dir={'rtl'}>
                                <Nav.Link href="#action1" className={'ps-4'}>خانه</Nav.Link>
                                <NavDropdown className={'border-0 ps-4'} title={'پست های من'}
                                             id={`offcanvasNavbarDropdown-expand-${props.expand}`}>
                                    <NavDropdown.Item className={'border-0'} href={'#actionx'}>معرفی
                                        کتاب</NavDropdown.Item>
                                    <NavDropdown.Item className={'border-0'} href={'#actionx'}>نقد
                                        کتاب</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='#action3' className={'ps-4'}>درباره من</Nav.Link>
                                <Nav.Link href='#action3' className={'ps-4'}>تماس من</Nav.Link>
                                <NavbarSearchForm />

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
export default NavbarCustom;