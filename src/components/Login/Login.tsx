import React from "react";
import { useForm } from "react-hook-form";
import { BaseErrorMessage } from "../base/baseInput/BaseErrorMessage";
import { BaseTextBox } from "../base/baseInput/BaseTextBox";
import cssClasses from "./Login.module.css";
interface loginModel {
    username: string,
    password: string
};
type propsType = {

};
export const Login: React.FC<propsType> = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onFormSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <div className="row">
            <form className={`${cssClasses.loginForm} col-12 col-sm-12 col-md-9 col-lg-7 mx-auto`}>
                <h1 className="text-center text-light h2 mb-4">ورود به سیستم</h1>

                <div className="form-group px-5">
                    <label htmlFor="usernameInput" className={`${cssClasses.loginInputLabel}`}>نام کاربری</label>
                    <BaseTextBox register={register}
                        isTextArea={false} name="UsernameInput" className={`${cssClasses.loginInput}`}
                        defaultValue="" isRequired={true} id="usernameInput"
                        requiredMessage="پر کردن این فیلد اجباری است" />
                    <BaseErrorMessage errorMessage={errors.UsernameInput?.message} />


                </div>
                <div className={`form-group mt-3 px-5`}>
                    <label htmlFor="passwordInput" className={`${cssClasses.loginInputLabel}`}>رمز عبور</label>
                    <BaseTextBox register={register}
                        type="password" isTextArea={false} name="PasswordInput"
                        className={`form-control ${cssClasses.loginInput}`}
                        defaultValue="" isRequired={true} id="passwordInput" requiredMessage="پر کردن این فیلد اجباری است"
                    />
                    <BaseErrorMessage errorMessage={errors.PasswordInput?.message} />

                </div>
                <div className="form-group text-center mt-3">
                    <input onClick={handleSubmit(onFormSubmit)}
                        type={"button"} value="ورود"
                        className={`btn btn-outline-light ${cssClasses.loginSubmitBtn}`} />
                </div>
            </form>
        </div>
    );
}