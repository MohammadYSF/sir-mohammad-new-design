import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaInstagram, FaLinkedin, FaPaperPlane, FaTelegram } from "react-icons/fa";
import { BaseErrorMessage } from "../base/baseInput/BaseErrorMessage";
import { BaseTextBox } from "../base/baseInput/BaseTextBox";

interface propsType {

}
export const Contact: React.FC<propsType> = (props: propsType) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmitForm = (data: any) => {
        console.log(data);
    }
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
            {/* my form */}
            <div>
                <BaseTextBox isTextArea={false} name="Name" MaxLen={100} defaultValue="" isRequired={true}
                    maxLenMessage="طول رشته زیاد است"
                    placeholder="نام خود را وارد کنید" requiredMessage="پر کردن این فیلد اجباری است" register={register} />
                <BaseErrorMessage errorMessage={errors.Name?.message} />
                <BaseTextBox isTextArea={false} className="mt-2" name="Email" MaxLen={200} defaultValue="" placeholder="ایمیل خود را وارد کنید"
                    isRequired={true} maxLenMessage="طول رشته زیاد است"
                    requiredMessage="پر کردن این فیلد اجباری است" register={register} />
                <BaseErrorMessage errorMessage={errors.Email?.message} />

                <BaseTextBox textAreaRows={10} isTextArea={true} className="mt-2" name="Text" defaultValue="" placeholder="ایمیل خود را وارد کنید"
                    isRequired={true}
                    requiredMessage="پر کردن این فیلد اجباری است" register={register} />
                <BaseErrorMessage errorMessage={errors.Text?.message} />
                <div className="d-block">
                    <Button className="btn-dark rounded-0 mt-1" onClick={handleSubmit(onSubmitForm)}>ثبت</Button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    );
}