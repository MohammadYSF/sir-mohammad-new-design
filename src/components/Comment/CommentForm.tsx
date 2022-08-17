import React from "react";
import {useForm} from 'react-hook-form';
import {Button, Form, FormText} from "react-bootstrap";
import classes from "./styles.module.css";

type props = {};
type formValueTypes = {
    name: string,
    email: string,
    commentText: string
}
const CommentForm: React.FC<props> = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<formValueTypes>();
    const onSubmit = (data: formValueTypes) => {
        console.log(data);
    }
    console.log(errors);
    return (
        <Form onSubmit={handleSubmit(onSubmit)} className={' w-50 mx-auto'}>
            <Form.Group>
                <Form.Control placeholder="نام"
                              {...register("name",
                                  {
                                      required: {
                                          value: true,
                                          message: 'لطفا نام خود را وارد کنید'
                                      }
                                  })}
                              className={`${classes.customInput} mt-3`}/>
                <Form.Text className={'text-danger'}>{errors.name?.message}</Form.Text>
            </Form.Group>
            <Form.Group>

                <Form.Control placeholder="ایمیل" {...register("email", {
                    required: {
                        value: true,
                        message: 'لطفا ایمیل را وارد کنید'
                    }, pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'ایمیل وارد شده معتبر نیست'
                    }
                })} className={`${classes.customInput} mt-3`}/>

                <Form.Text className={'text-danger'}>{errors.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Control placeholder="متن نظر" {...register("commentText", {
                    required: {
                        value: true,
                        message: 'لطفا نظر خود را بنویسید'
                    }
                })} className={`${classes.customInput} mt-3`}/>

                <Form.Text className={'text-danger'}>{errors.commentText?.message}</Form.Text>
            </Form.Group>
            <div className={'text-center'}>
            <Button variant={'success'} className={'rounded-0 mt-3'} type="submit">ثبت نظر</Button>
            </div>
            </Form>
    );
}
export default CommentForm;