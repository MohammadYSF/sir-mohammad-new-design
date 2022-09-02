import { Table } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaPaperPlane, FaTelegram } from "react-icons/fa";

interface propsType {

}
export const Contact: React.FC<propsType> = (props: propsType) => {
    return (
        <>
            <h1 className="contact-h1">تماس با من</h1>
            <p>سلام . می تونین از این طریق با من تماس بگیرین</p>
            <Table striped>
                <thead>
                    <tr>
                        <th>شبکه اجتماعی</th>
                        <th>شناسه</th>
                        <th>لینک</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>اینستاگرام</td>
                        <td>@m.u3fiyan</td>
                        <td>
                            <a href="https://instagram.com/m.u3fiyan" target={"_blank"} className="contact-icon-link">
                                <FaInstagram />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>لینکداین</td>
                        <td>mohammad-yoosefiyan</td>
                        <td>
                            <a href="https://www.linkedin.com/in/mohammad-yoosefiyan/"
                                target={"_blank"} className="contact-icon-link">
                                <FaLinkedin />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>تلگرام</td>
                        <td>@kingmohammad2</td>
                        <td>
                            <FaPaperPlane className="contact-icon-link" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}