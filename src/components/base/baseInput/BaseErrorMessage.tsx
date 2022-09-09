import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface propsType{
    errorMessage:string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}
export const BaseErrorMessage = (props:propsType) => {
    return (
        <>
            <span className="text-danger">{props.errorMessage?.toString()}</span>
        
        </>
    );
}