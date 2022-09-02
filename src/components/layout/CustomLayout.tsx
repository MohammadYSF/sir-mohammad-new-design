import { Container } from "react-bootstrap";
import { Footer } from "../footer/Footer";
import { CustomNavbar } from "../navbar/CustomNavbar";
interface LayoutType {
    children: JSX.Element
};
export const CustomLayout = ({ children }: LayoutType) => {
    return (
        <>
            <CustomNavbar expand={'lg'} />
            <Container>
                {children}
            </Container>
            <Footer />

        </>
    );
}