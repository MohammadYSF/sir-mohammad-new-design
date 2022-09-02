import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

interface propsType {

}
interface searchFormValueTypes {
    searchText: string
}
export const NavbarSearchForm: React.FC<propsType> = (props: propsType) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<searchFormValueTypes>();
    const onSubmit = (data: searchFormValueTypes) => {
        navigate("/search/" + data.searchText);
    }
    return (
        <>
            <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>

                <Form.Control
                    type="search"
                    placeholder={errors.searchText == undefined ? 'بتايپ' : errors.searchText?.message}
                    className={`me-2 base-text-input ${errors.searchText == undefined?'':'navbar-search-form-error-input'}`}
                    aria-label="Search"
                    {...register("searchText",
                        {
                            required: {
                                value: true,
                                message: 'لطفا عبارتي را وارد کنید'
                            }
                        })}
                />


                <Button variant="" type="submit" className="navbar-search-btn" >
                    <FaSearch />
                </Button>
            </Form>
        </>
    );
}