import React from "react";
import {Button, Form, FormGroup, InputGroup} from "react-bootstrap";
import classes from "../Comment/styles.module.css";
import {useForm} from 'react-hook-form';

type props = {}
type formValueTypes = {
    searchText: string
}
const NavbarSearchForm: React.FC<props> = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<formValueTypes>();
    const onSubmit = (data: formValueTypes) => {
        console.log(data);
    }
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)} className={'d-flex'}>
                <Form.Group>
                <InputGroup>
                    <Form.Control placeholder="اینجا تایپ کن"
                                  {...register("searchText",
                                      {
                                          required: {
                                              value: true,
                                              message: 'لطفا عبارت مد نظر خود را وارد کنید'
                                          }
                                      })}
                                  type="search"
                                  style={{marginLeft: "0 !important"}}

                    />
                    <Button type={'submit'} variant="outline-success">بگرد</Button>
                </InputGroup>
                <Form.Text className={'text-danger'}>{errors.searchText?.message}</Form.Text>
                </Form.Group>
            </Form>

        </>
    );
}
export default NavbarSearchForm;