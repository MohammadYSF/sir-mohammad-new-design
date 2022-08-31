import React from "react";
import cssClasses from "./Login.module.css";
interface loginModel {
    username: string,
    password: string
};
type propsType = {

};
export const Login: React.FC<propsType> = () => {
    return (
        <div className="row">
            <form className={`${cssClasses.loginForm} col-12 col-sm-12 col-md-9 col-lg-7 mx-auto`}>
                <h1 className="text-center text-light h2 mb-4">ورود به سیستم</h1>

                <div className="form-group px-5">
                    <label htmlFor="usernameInput" className={`${cssClasses.loginInputLabel}`}>نام کاربری</label>
                    <input type={"text"} className={`form-control ${cssClasses.loginInput}`} />

                </div>
                <div className={`form-group mt-3 px-5`}>
                    <label htmlFor="usernameInput" className={`${cssClasses.loginInputLabel}`}>رمز عبور</label>
                    <input type={"password"} className={`form-control ${cssClasses.loginInput}`} />
                </div>
                <div className="form-group text-center mt-3">
                    <input type={"submit"} value="ورود" className={`btn btn-outline-light ${cssClasses.loginSubmitBtn}`} />
                </div>
            </form>
        </div>
    );
}