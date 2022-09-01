import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
interface propsType{
    expand:string
};
export const CustomNavbar = ({expand}:propsType) => {
    return (
        <>
            <Navbar key={expand} bg="light" expand={expand} className="mb-3 px-5">

                <Navbar.Brand href="/">آقا محمد</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            آقا محمد
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">خانه</Nav.Link>
                            <Nav.Link href="#action2">لينک ها</Nav.Link>
                            <NavDropdown
                                title="بنداز "
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <NavDropdown.Item href="#action3">لينک 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    لينک 2
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    لينک 3
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="تايپ کن"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">بگرد</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Navbar>
        </>
    );
}