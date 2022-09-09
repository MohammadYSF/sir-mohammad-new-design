import { FieldErrorsImpl, FieldValues, useForm, UseFormRegister } from "react-hook-form";
interface propsType {
    name: string,
    id?: string,
    isRequired?: boolean,
    requiredMessage?: string,
    MaxLen?: number,
    maxLenMessage?: string,
    placeholder?: string,
    register?: UseFormRegister<FieldValues>,
    defaultValue?: string,
    className?: string,
    isTextArea: boolean,
    textAreaRows?: number,
    type?: string
}
export const BaseTextBox = (props: propsType) => {
    return (
        <>
            {props.register !== undefined
                ? props.isTextArea === false ?
                    <input type={props.type} defaultValue={props.defaultValue === undefined ? "" : props.defaultValue}
                        className={`form-control base-text-input ${props.className}`} id={props.id} placeholder={props.placeholder}
                        {...props.register(props.name, {
                            required: {
                                value: props.isRequired === undefined ? false : true,
                                message: props.requiredMessage === undefined ? "" : props.requiredMessage
                            },
                            maxLength: {
                                value: props.MaxLen === undefined ? Number.MAX_VALUE : props.MaxLen,
                                message: props.maxLenMessage === undefined ? "" : props.maxLenMessage
                            }
                        })} />
                    :
                    <textarea rows={props.textAreaRows} defaultValue={props.defaultValue === undefined ? "" : props.defaultValue}
                        className={`form-control base-text-input ${props.className}`} id={props.id} placeholder={props.placeholder}
                        {...props.register(props.name, {
                            required: {
                                value: props.isRequired === undefined ? false : true,
                                message: props.requiredMessage === undefined ? "" : props.requiredMessage
                            },
                            maxLength: {
                                value: props.MaxLen === undefined ? Number.MAX_VALUE : props.MaxLen,
                                message: props.maxLenMessage === undefined ? "" : props.maxLenMessage
                            }
                        })}></textarea>
                : props.isTextArea === false ?
                    <input type={props.type} className={`form-control base-text-input ${props.className}`} name={props.name} id={props.id} placeholder={props.placeholder} />
                    :
                    <textarea rows={props.textAreaRows} className={`form-control base-text-input ${props.className}`} name={props.name}
                        id={props.id} placeholder={props.placeholder}></textarea>

            }


        </>
    );
}